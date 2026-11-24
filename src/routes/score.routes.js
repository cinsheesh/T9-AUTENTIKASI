
import express from 'express';
import * as ctrl from '../controllers/score.controller.js';
import { butuhLogin } from '../middleware/auth.js';
import { validasi } from '../middleware/validasi.js';
import { skemaScore } from '../validators/score.validator.js';

const router = express.Router();

router.get('/', ctrl.daftar);
router.post('/', butuhLogin, validasi(skemaScore), ctrl.buat);
router.delete('/:id', butuhLogin, ctrl.hapus);

export default router;
