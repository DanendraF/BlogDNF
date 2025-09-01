import { Router } from 'express';
import {
  listAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from '../services/authorsService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
  const result = await listAuthors();
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getAuthorById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

router.post('/', requireAuth, async (req, res) => {
  const result = await createAuthor(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updateAuthor(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deleteAuthor(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;