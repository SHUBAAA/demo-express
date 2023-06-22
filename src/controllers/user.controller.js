import EstudianteModel from '../models/user.model.js';
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














async function getUserById(req, res) {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).send({ error: 'No existe tal usuario' });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function deleteUserById(req, res) {
    try {
        const userId = req.params.userId;
        const user = await UserModel.deleteOne({ _id: userId });
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function updateUserById(req, res) {
    try {
        const userId = req.params.userId;
        const name = req.body.name;
        const age = req.body.age;
        const user = await UserModel.updateOne({ _id: userId }, { name, age });
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

function getUserContacts(req, res) {
    const userId = req.params.userId;
    const name = req.body.name;
    const number = req.body.number;

    const user = {
        nombre: name,
        numero: number,
    };

    res.send({ user });
}

function deleteContact(req, res) {
    const userId = req.params.userId;
    const contactId = req.params.contactId;

    // const { userId, contactId } = req.params;
    res.send({
        message: `este es un delete para el user ${userId} y en el contacto ${contactId}`,
    });
}

export {
    deleteUserById,
    getUserById,
    getEstudiantes,
    createUser,
    getUserContacts,
    deleteContact,
    updateUserById,
    soyYo,
    userLogin
};
