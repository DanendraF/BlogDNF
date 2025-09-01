import { Router } from 'express';
import {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../services/usersService';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
  const result = await listUsers();
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getUserById(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  return res.json(result);
});

router.post('/', requireAuth, async (req, res) => {
  const result = await createUser(req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.status(201).json(result);
});

router.patch('/:id', requireAuth, async (req, res) => {
  const result = await updateUser(req.params.id, req.body || {});
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const result = await deleteUser(req.params.id);
  if (result.error) return res.status(400).json({ message: result.error });
  return res.json(result);
});

export default router;