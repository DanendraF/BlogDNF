import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

type ListCommentsParams = {
  postId?: string;
};

export async function listComments({ postId }: ListCommentsParams = {}) {
  let query = supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });
  if (postId) query = query.eq('post_id', postId);
  const { data, error } = await query;
  if (error) return { error: error.message };
  return { comments: data || [] };
}

export async function getCommentById(id: string) {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'Comment not found' };
  return { comment: data };
}

export async function createComment(payload: any) {
  if (!payload?.content || !payload?.post_id) return { error: 'Content and post_id are required' };
  const { data, error } = await supabase
    .from('comments')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getCommentById(data.id);
}

export async function updateComment(id: string, payload: any) {
  const { error } = await supabase
    .from('comments')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getCommentById(id);
}

export async function deleteComment(id: string) {
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}