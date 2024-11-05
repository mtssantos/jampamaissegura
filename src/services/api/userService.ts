import api from './api';

interface UserData {
    nome: string;
    cpf: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export const createUser = async (userData: UserData) => {

    const { nome, cpf, phone, password, confirmPassword } = userData;

    const registerInfo = {
      cpf,
      phone,
      password,
      "password_confirmation": confirmPassword
    };

    try {
      const response = await api.post('/users', registerInfo);

      return { success: true, data: response.data };

    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        return { success: false, error: error.response.data.errors };
      }
  
      return { success: false, error: 'Erro desconhecido na criação do usuário' };
    }
};