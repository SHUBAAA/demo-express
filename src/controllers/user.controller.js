import { EstudianteModel, MensajeModel } from '../models/user.model.js';
import bcrypt from "bcrypt";

async function createUser(req, res) {
    try {

        const password = req.body.password;
        const name = req.body.name;
        const email = req.body.email;
        const dni = req.body.dni;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const estudianteCreated = await EstudianteModel.create({ name: name, email: email, dni: dni, password: encryptedPassword });
        res.send(estudianteCreated);
    } catch (err) {
        res.status(500).send(err);
        res.status(400).send(err);
    }
}


async function soyYo(req, res) {
    try {
        res.send({ message: `Leandro Alvial 🙀` });

    } catch (err) {
        res.status(500).send(err);
    }
}

async function getEstudiantes(req, res) {
    try {
        const estudiantes = await EstudianteModel.find({});
        res.send(estudiantes);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function userLogin(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const estudiantes = await EstudianteModel.find({ email: email });
        const passwordEncrip = estudiantes[0].password;
        const logged = await bcrypt.compare(password, passwordEncrip);
        res.send(logged)

    } catch (err) {
        res.status(500).send(err);
    }

}

async function crearMensaje(req, res) {

    try {
        const userId = req.body.userId;
        const contenido = req.body.contenido;

        const mensajeCreado = await MensajeModel.create({ creadorId: userId, contenido: contenido });
        res.send(mensajeCreado)
    } catch (err) {
        res.status(500).send(err);
    }
}

async function verMensajes(req, res) {

    try {
        const userId = req.params.userId;
        const mensajes = await MensajeModel.find({ creadorId: userId });

        res.send(mensajes);

    } catch (err) {
        res.status(500).send(err);
    }
}


async function deleteMensajeById(req, res) {
    try {
        const messageId = req.params.messageId;
        const mensaje = await MensajeModel.deleteOne({ _id: messageId });
        res.send(mensaje);
    } catch (err) {
        res.status(500).send(err);
    }
}

export {
    deleteMensajeById,
    getEstudiantes,
    createUser,
    soyYo,
    userLogin,
    crearMensaje,
    verMensajes
};
