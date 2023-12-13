import express from 'express';
import { signup } from '../controllers/auth.controller.js';



const router = express.Router();

router.post("/signup",signup)

export default router;
//C:\Users\raksh\OneDrive\Desktop\mern_auth\mernstack\src\pages\SignUP.jsxv