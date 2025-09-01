import { Router } from 'express';
import {
  listCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../services/categoriesService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
  const result = await listCategories();
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getCategoryById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

router.post('/', requireAuth, async (req, res) => {
  const result = await createCategory(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updateCategory(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deleteCategory(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;