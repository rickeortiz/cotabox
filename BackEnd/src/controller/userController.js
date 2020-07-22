const UserModel = require('../models/userModel');

module.exports = {
    async index(request, response) {
        const users = await UserModel.find({});
        return response.send({ users });
    },

    async create(request, response) {
        try {
            let user = request.body;

            if(await UserModel.exists({ FirstName: user.FirstName, LastName: user.LastName }))
                return response.status(400).send({ erro: 'User already exists' })

            user = await UserModel.create(user);

            return response.send({ user });
        } catch (error) {
            return response.status(400).send({ erro: 'Registration failed' });
        }
    },

    async delete(request, response) {
        try {
            const user = request.body;
            
            if(!await UserModel.exists({ FirstName: user.FirstName, LastName: user.LastName }))
                return response.status(400).send({ erro: 'User not exists' })

            const userDelete = UserModel.find({ FirstName: user.FirstName, LastName: user.LastName });
            await UserModel.deleteOne(userDelete.id);

            return response.json({ retorno: 'User has deleted' });
        } catch (error) {
            return response.status(400).send({ erro: "User can't be deleted" });
        }
    }
}