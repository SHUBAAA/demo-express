import express from 'express';
import userRoutes from './routes/users.routes.js';
import cors from 'cors';
import envs from './configs/environments.js';
console.log(envs.name, envs.number)
const app = express();

app.use(cors());
app.use(express.json());

app.use('', userRoutes);

app.listen(3000, () => {
    console.log(`Server is running on PORT: 3000`)
});