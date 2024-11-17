import { Request, Response, NextFunction } from 'express';
import ChatService from '../services/chatService';

class ChatController {
  async sendMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { message } = req.body;

      console.log('Sessão no início da requisição:', req.session);
      //Session
      // Inicializa o userId na sessão
      req.session.userId = req.session.userId || 'defaultUser';

      // Inicializa o histórico, caso ainda não exista
      req.session.history = req.session.history || [];

      // Adiciona a nova mensagem do usuário ao histórico
      req.session.history.push({ role: 'user', content: message });
      
      // Verifica se a mensagem está sendo recebida corretamente
      console.log('Mensagem recebida do frontend:', message);

      // Verifica o histórico completo
      console.log('Histórico completo acumulado:', req.session.history);

      const gptResponse = await ChatService.processMessage(req.session.history);

      
      // Adiciona a resposta da IA ao histórico
      req.session.history.push({ role: 'assistant', content: gptResponse });

      // Verifica se a resposta foi adicionada ao histórico
      console.log('Histórico atualizado:', req.session.history);

      return res.status(200).json({ response: gptResponse });
    } catch (error) {
      console.error('Error in ChatController:', error);
      return next(error);  
    }
  }
}

export default new ChatController();
