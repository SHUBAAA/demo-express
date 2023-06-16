import { Router } from 'express';
import {
  deleteContact,
  getUserContacts,
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.post('/users', createUser);
router.delete('/users/:userId', deleteUserById);
router.put('/users/:userId', updateUserById);

router.get('/users/:userId/contacts', getUserContacts);

router.post('/users/:userId/contacts', getUserContacts);

router.delete('/users/:userId/contacts/:contactId', deleteContact);

export default router;
