import { UserRepository } from '@/core/domain/repositories/UserRepository';

import { PublicApi } from '../api/Api';
import { IUser } from '@/core/domain/models/User';

export class UserApi extends PublicApi implements UserRepository {
  public GetUser = async () => {
    const data = await this.get<IUser>('/api/user.json');
    return data.data;
  };
}
