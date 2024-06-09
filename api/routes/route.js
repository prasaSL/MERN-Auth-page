import express  from "express";
import * as UserController from '../controller/user.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
    });

router.post('/signup', UserController.signUp);

export default router;
