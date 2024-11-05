import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

interface LoginCredentials {
    cpf: string;
    password: string;
}

export const authLogin = async(credentials: LoginCredentials) => {
    try {
        const response = await api.post('/login', credentials);

        const token = response.data.token;

        await AsyncStorage.setItem('authToken', token);

        return { success: true, token };
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        return { success: false, error };
    }
}

export const authGetToken = async () => {
    try {
      return await AsyncStorage.getItem('authToken');
    } catch (error) {
      console.error('Erro ao obter o token:', error);
      return null;
    }
};


export const authLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
};