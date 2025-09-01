import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

type ListPostsParams = {
  search?: string;
  authorId?: string;
  categoryId?: string;
  limit?: number;
  offset?: number;
};

export async function listPosts({
  search,
  authorId,
  categoryId,
  limit = 20,
  offset = 0
}: ListPostsParams = {}) {
  let query = supabase
    .from('posts')
    .select('id,title,slug,content,excerpt,cover_image,author_id,category_id,views,likes,published,created_at,updated_at')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (authorId) query = query.eq('author_id', authorId);
  if (categoryId) query = query.eq('category_id', categoryId);
  if (search) query = query.ilike('title', `%${search}%`);

  const { data, error } = await query;
  if (error) return { error: error.message };
  return { posts: data || [] };
}

export async function getPostById(id: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('id,title,slug,content,excerpt,cover_image,author_id,category_id,views,likes,published,created_at,updated_at')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'Post not found' };
  return { post: data };
}

export async function createPost(payload: any) {
  const required = ['title', 'slug', 'content', 'author_id'];
  for (const k of required) {
    if (!payload?.[k]) return { error: `${k} is required` };
  }
  const { data, error } = await supabase
    .from('posts')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getPostById(data.id);
}

export async function updatePost(id: string, payload: any) {
  const { error } = await supabase
    .from('posts')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getPostById(id);
}

export async function deletePost(id: string) {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}