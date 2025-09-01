import { Router } from 'express';
import {
  listPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../services/postsService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

// List posts (with optional filters)
router.get('/', async (req, res) => {
  const { search, authorId, categoryId } = req.query;
  const limit = Math.max(1, Math.min(100, parseInt(String(req.query.limit || '20'), 10)));
  const offset = Math.max(0, parseInt(String(req.query.offset || '0'), 10));
  const result = await listPosts({
    search: typeof search === 'string' ? search : undefined,
    authorId: typeof authorId === 'string' ? authorId : undefined,
    categoryId: typeof categoryId === 'string' ? categoryId : undefined,
    limit,
    offset
  });
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json({ ...result, limit, offset });
});

// Get post by id
router.get('/:id', async (req, res) => {
  const result = await getPostById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

// Create post
router.post('/', requireAuth, async (req, res) => {
  const result = await createPost(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

// Update post
router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updatePost(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

// Delete post
router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deletePost(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;