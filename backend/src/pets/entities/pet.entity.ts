import { UserEntity } from 'src/users/entities/user.entity';
import { AttachmentEntity } from './attachment.entitiy';

export enum Gender {
  male = 'male',
  female = 'female',
}

export enum Category {
  cat = 'cat',
  dog = 'dog',
  reptile = 'reptile',
  bird = 'bird',
}

export class PetEntity {
  id: number;
  petName: string;
  age: number | undefined;
  gender: Gender | string;
  isNetering: boolean;
  isPublic: boolean;
  breed?: string | null;
  weight?: number | null;
  tag: string[];
  photos: string[];
  category: Category | string;

  ownerId: number;
  owner?: UserEntity;

  attachments?: AttachmentEntity[];

  constructor(partial: Partial<PetEntity>) {
    Object.assign(this, partial);

    if (partial.gender !== undefined) {
      this.gender =
        typeof partial.gender === 'string'
          ? Gender[(partial.gender as keyof typeof Gender) || partial.gender]
          : partial.gender;
    }

    if (partial.category !== undefined) {
      this.category =
        typeof partial.category === 'string'
          ? Category[
              (partial.category as keyof typeof Category) || partial.category
            ]
          : partial.category;
    }

    if (partial.owner) {
      this.owner = new UserEntity(partial.owner);
    }

    if (partial.attachments) {
      this.attachments = partial.attachments.map(
        (attachment) => new AttachmentEntity(attachment),
      );
    }
  }
}
