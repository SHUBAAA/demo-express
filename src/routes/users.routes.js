import { Router } from 'express';
import {
    deleteContact,
    getUserContacts,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    soyYo,
    getEstudiantes,
    userLogin
} from '../controllers/user.controller.js';

const router = Router();


router.get("/", soyYo);
router.post('/auth/register', createUser);
router.get('/users', getEstudiantes);
router.get("/auth/login", userLogin)


router.get('/auth/:register', createUser);

router.delete('/users/:userId', deleteUserById);
router.put('/users/:userId', updateUserById);

router.get('/users/:userId/contacts', getUserContacts);

router.post('/users/:userId/contacts', getUserContacts);

router.delete('/users/:userId/contacts/:contactId', deleteContact);

export default router;
