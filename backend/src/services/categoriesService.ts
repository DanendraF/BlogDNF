import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function listCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  if (error) return { error: error.message };
  return { categories: data || [] };
}

export async function getCategoryById(id: string) {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'Category not found' };
  return { category: data };
}

export async function createCategory(payload: any) {
  if (!payload?.name) return { error: 'Name is required' };
  const { data, error } = await supabase
    .from('categories')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getCategoryById(data.id);
}

export async function updateCategory(id: string, payload: any) {
  const { error } = await supabase
    .from('categories')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getCategoryById(id);
}

export async function deleteCategory(id: string) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}