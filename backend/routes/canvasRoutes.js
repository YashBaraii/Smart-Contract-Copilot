import express from 'express';
import {
  createCanvas,
  getCanvases,
  getCanvas,
  updateCanvas,
  deleteCanvas
} from '../controllers/canvasController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect); // Protect all canvas routes

router.route('/')
  .post(createCanvas)
  .get(getCanvases);

router.route('/:id')
  .get(getCanvas)
  .put(updateCanvas)
  .delete(deleteCanvas);

export default router; 