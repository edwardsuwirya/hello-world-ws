import configure from './config';
import express from "express";
import AppMiddleware from './middlewares/app-middleware';
import AppRouter from './routes';

configure();
const app = express();
app.use(AppMiddleware);
app.use(AppRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}!`);
});