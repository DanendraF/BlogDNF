import { Router } from 'express';
import {
  listTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
} from '../services/tagsService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
  const result = await listTags();
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getTagById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

router.post('/', requireAuth, async (req, res) => {
  const result = await createTag(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updateTag(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deleteTag(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;