import { Router } from 'express';
import {
  listComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} from '../services/commentsService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
  const { postId } = req.query;
  const result = await listComments({
    postId: typeof postId === 'string' ? postId : undefined
  });
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getCommentById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

router.post('/', requireAuth, async (req, res) => {
  const result = await createComment(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updateComment(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deleteComment(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;