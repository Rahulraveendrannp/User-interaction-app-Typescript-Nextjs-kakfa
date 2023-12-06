import express, { Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter'
import adminRouter from './routes/adminRouter'
import connectDB from '../config/db';


const app: Application = express();
dotenv.config();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT: number = 3030;

//Routes
app.use("/click", userRouter);

app.use('/admin',adminRouter)



app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});




