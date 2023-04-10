import axios from 'axios';
import { environment } from '../environments/environment';

const api = axios.create({
  baseURL: environment.baseUrl,
});

export const useApi = () => ({
  signIn: async (email: string, password: string) => {
    const result = await api.post(environment.routes.auth.login, { email, password });
    return result.data;
  },
})
