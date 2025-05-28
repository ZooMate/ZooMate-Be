import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Exclude } from 'class-transformer';

export class UserEntity {
  // id: number;
  // email: string;
  // nickname: string;
  // @Exclude()
  // password: string;
  // @Exclude()
  // createdAt?: Date;
  // @Exclude()
  // updatedAt?: Date;

  id: number;
  userId: string;
  userName: string;
  userPassword: string;
  region: string;
  userDesc: string;
  pets: Array<number>;
  profile: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
