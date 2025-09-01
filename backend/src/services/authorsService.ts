import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function listAuthors() {
  const { data, error } = await supabase
    .from('authors')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return { error: error.message };
  return { authors: data || [] };
}

export async function getAuthorById(id: string) {
  const { data, error } = await supabase
    .from('authors')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'Author not found' };
  return { author: data };
}

export async function createAuthor(payload: any) {
  if (!payload?.name || !payload?.username) return { error: 'Name and username are required' };
  const { data, error } = await supabase
    .from('authors')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getAuthorById(data.id);
}

export async function updateAuthor(id: string, payload: any) {
  const { error } = await supabase
    .from('authors')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getAuthorById(id);
}

export async function deleteAuthor(id: string) {
  const { error } = await supabase
    .from('authors')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}