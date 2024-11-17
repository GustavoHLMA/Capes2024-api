import { z } from 'zod';

export const UserTest = z.object({
  name: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'O nome é obrigatório',
    })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' }),
  cpf: z
    .string({
      invalid_type_error: 'O CPF deve ser uma string',
      required_error: 'O CPF é obrigatório',
    })
    .length(11, { message: 'O CPF deve ter 11 caracteres' })
    .regex(/^\d+$/, { message: 'O CPF deve conter apenas números' }),
  email: z
    .string({
      invalid_type_error: 'O email deve ser uma string',
      required_error: 'O email é obrigatório',
    })
    .email({ message: 'Endereço de email inválido' }),
  password: z
    .string({ invalid_type_error: 'A senha deve ser uma string' })
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
});

export const UpdateUserTest = UserTest.partial();