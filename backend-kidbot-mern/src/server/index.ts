import express from 'express';
import cors from 'cors';
import { connectDB } from './database';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes';
import storyRouter from './routes/story.routes';
import swaggerUi  from 'swagger-ui-express';
import path from 'path';
import yaml from 'yamljs';

const swaggerDocument: any = yaml.load(path.join(__dirname, './config/api.yml'));

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(swaggerDocument));
connectDB()


app.use(cors()); 
app.use('/users', userRouter);
app.use('/stories', storyRouter);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
