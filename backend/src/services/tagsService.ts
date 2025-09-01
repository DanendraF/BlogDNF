import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function listTags() {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name');
  if (error) return { error: error.message };
  return { tags: data || [] };
}

export async function getTagById(id: string) {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'Tag not found' };
  return { tag: data };
}

export async function createTag(payload: any) {
  if (!payload?.name) return { error: 'Name is required' };
  const { data, error } = await supabase
    .from('tags')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getTagById(data.id);
}

export async function updateTag(id: string, payload: any) {
  const { error } = await supabase
    .from('tags')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getTagById(id);
}

export async function deleteTag(id: string) {
  const { error } = await supabase
    .from('tags')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}