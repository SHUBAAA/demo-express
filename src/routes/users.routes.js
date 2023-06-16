import { Router } from 'express';
import { deleteContact, getUserContacts } from '../controllers/user.controller.js';

const router = Router();

router.get('/users/:userId/contacts', getUserContacts);

router.post('/users/:userId/contacts', getUserContacts);

router.delete('/users/:userId/contacts/:contactId', deleteContact);

export default router;