import { Router } from 'express';
import ChatController from '../controllers/ChatController';

const chatRouter = Router();

// Define a rota para o chat
chatRouter.post('/', ChatController.sendMessage);
chatRouter.route('/').get((_, res) => {
  res.status(200).send('The chat server is running');
}
)

export default chatRouter;
