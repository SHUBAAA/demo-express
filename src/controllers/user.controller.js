import UserModel from '../models/user.model.js';

async function createUser(req, res) {
  try {
    const userCreated = await UserModel.create(req.body);
    res.send(userCreated);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getUsers(req, res) {
  try {
    const users = await UserModel.find({});
    res.send(users);
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
  getUsers,
  createUser,
  getUserContacts,
  deleteContact,
  updateUserById,
};
