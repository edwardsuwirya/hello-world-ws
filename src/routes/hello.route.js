import {Router} from 'express';

const HelloRouter = Router()
    .get('/', (req, res) => {
        res.send('Hello World');
    });

export default HelloRouter;