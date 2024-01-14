import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import sendRewards from './sendRewards';
import raffle from './raffle';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/', sendRewards);
// router.use('/', raffle);

export default router;
