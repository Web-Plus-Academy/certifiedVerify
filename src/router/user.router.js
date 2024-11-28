import express from 'express';
import {
  getUserDetails,
  createUser,
} from '../controller/user.controller.js';

const router = express.Router();

// Route to get user details by username
router.get('/:username', getUserDetails);

// Route to create a new user
router.post('/', createUser);



export default router;
