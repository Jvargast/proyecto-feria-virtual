import { createConnection } from "typeorm";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import express, { Request, Response, json, NextFunction} from 'express';
import passport from "passport";
import configure from "./config/passport";
import authRoutes from "./routes/auth.router";
import cors from "cors";

createConnection()
    .then(connection => {
    // here you can start to work with your entities
    console.log('Connection successful')
}).catch(error => console.log(error));

configure(passport);
passport.initialize();

const app = express();

app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded())


// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     res.json('Hola soy un middleware');
//     next();
// });

app.use('/auth', authRoutes );

app.use('/protected', passport.authenticate('jwt', {session: false}), (req: Request, res: Response, next: NextFunction) => {
    console.log('User', req.user);
    res.json('Response');
});

app.listen(4000);



