import express from 'express';
import HelloRouter from "./hello.route";

export default express.Router()
    .use('/hello', HelloRouter)
    .use((req, res, next) => {
        res.status(404).json({message: 'Not Found.'});
    });
