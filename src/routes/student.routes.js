
import express from 'express';
import * as ctrl from '../controllers/student.controller.js';
import { butuhLogin } from '../middleware/auth.js';
import { validasi } from '../middleware/validasi.js';
import { skemaStudent } from '../validators/student.validator.js';

const router = express.Router();

router.get('/', ctrl.daftar);
router.get('/:id', ctrl.detail);
router.get('/:id/scores', ctrl.detailDenganScore);
router.post('/', butuhLogin, validasi(skemaStudent), ctrl.buat);
router.put('/:id', butuhLogin, validasi(skemaStudent), ctrl.ubah);
router.delete('/:id', butuhLogin, ctrl.hapus);

export default router;
