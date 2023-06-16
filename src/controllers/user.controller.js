function getUserContacts(req, res){
    const userId = req.params.userId;
    const name = req.body.name;
    const number = req.body.number;

    const user = {
        "nombre": name,
        "numero": number
    }

    res.send({ user })
}

function deleteContact(req, res) {
    const userId = req.params.userId;
    const contactId = req.params.contactId;

    // const { userId, contactId } = req.params;
    res.send({ message: `este es un delete para el user ${userId} y en el contacto ${contactId}` })
}

export { getUserContacts, deleteContact }