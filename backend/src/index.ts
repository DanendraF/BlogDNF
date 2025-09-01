import 'dotenv/config';
import express from 'express';
import { createClient } from '@supabase/supabase-js';

import usersRoutes from './routes/usersRoutes';
import postsRoutes from './routes/postsRoutes';
import authorsRoutes from './routes/authorsRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
import tagsRoutes from './routes/tagsRoutes';
import commentsRoutes from './routes/commentsRoutes';


const app = express();
const PORT = process.env.PORT || 3001;

// Inisialisasi Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

app.use(express.json());
app.use('/api/posts', postsRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/tags', tagsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/users', usersRoutes);

// Test connection
(async () => {
  const { data, error } = await supabase.from('posts').select('id').limit(1);
  if (error) {
    console.log('❌ Supabase connection failed:', error.message);
  } else {
    console.log('✅ Supabase connection successful!');
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("hello D");