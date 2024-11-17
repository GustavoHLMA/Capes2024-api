import axios from 'axios'; // Certifique-se de ter essa linha no topo do arquivo


class ChatService {
  async processMessage(history) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: history,
          max_tokens: 2000,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      // Tratamento detalhado de erros
      if (error.response) {
        console.error('Erro da OpenAI API:', error.response.data);
        if (error.response.status === 429) {
          throw new Error('Limite de requisições excedido. Tente novamente mais tarde.');
        } else if (error.response.status === 401) {
          throw new Error('Erro de autenticação. Verifique sua API Key.');
        } else {
          throw new Error(`Erro inesperado: ${error.response.status}. ${error.response.data.error?.message}`);
        }
      } else {
        console.error('Erro ao se comunicar com a OpenAI:', error.message);
        throw new Error('Erro de conexão com a OpenAI.');
      }
    }
  }
}

export default new ChatService();
