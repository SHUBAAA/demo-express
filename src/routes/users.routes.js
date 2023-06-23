import { Router } from 'express';
import {
    createUser,
    soyYo,
    getEstudiantes,
    userLogin,
    crearMensaje,
    verMensajes,
    deleteMensajeById
} from '../controllers/user.controller.js';

const router = Router();


router.get("/", soyYo);
router.post('/auth/register', createUser);
router.get('/users', getEstudiantes);
router.post("/auth/login", userLogin);
router.post("/messages", crearMensaje);
router.get("/users/:userId/messages", verMensajes);
router.delete('/messages/:messageId', deleteMensajeById);

export default router;
