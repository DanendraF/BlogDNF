import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function listUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return { error: error.message };
  return { users: data || [] };
}

export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return { error: error.message };
  if (!data) return { error: 'User not found' };
  return { user: data };
}

export async function createUser(payload: any) {
  if (!payload?.email) return { error: 'Email is required' };
  const { data, error } = await supabase
    .from('users')
    .insert(payload)
    .select('id')
    .single();
  if (error) return { error: error.message };
  return getUserById(data.id);
}

export async function updateUser(id: string, payload: any) {
  const { error } = await supabase
    .from('users')
    .update(payload)
    .eq('id', id);
  if (error) return { error: error.message };
  return getUserById(id);
}

export async function deleteUser(id: string) {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);
  if (error) return { error: error.message };
  return { success: true };
}