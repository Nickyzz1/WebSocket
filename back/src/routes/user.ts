import express, { Request, Response, Router } from 'express';
import { login, register } from '../controllers/Auth.ts';
import { registerMid } from '../midwares/register.ts';
import { loginMid } from '../midwares/login.ts';

const router : Router = express.Router();

router
    .post('/register', registerMid, register)

    .post('/login', loginMid, login)
    
export default router;