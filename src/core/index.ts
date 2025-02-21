import { UserUseCase } from './application/UserUseCase';

import { UserApi } from './infraestructure/services/UserApi';

// Repositories
const userApi = new UserApi({ baseURL: '' });

// Client
export const clientUserApi = new UserUseCase(userApi);
