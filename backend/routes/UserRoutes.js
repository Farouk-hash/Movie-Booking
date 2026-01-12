
import express from 'express';
import { registration,login } from '../controllers/UserController.js';

export const UserRoutes = express.Router();

UserRoutes.post('/registration' ,registration);
UserRoutes.post('/login',login);