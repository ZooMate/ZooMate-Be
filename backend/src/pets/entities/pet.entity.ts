import { UserEntity } from 'src/users/entities/user.entity';
// import { AnswerEntity } from './answer.entitiy';
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
  age: number;
  gender: Gender;
  isNetering: boolean;
  isPublic: boolean;
  bread?: string | null;
  weight?: number | null;
  tag: string[];
  photos: string[];
  category: Category;

  ownerId?: number;
  owner: UserEntity;

  // answers?: AnswerEntity[];
  attachments?: AttachmentEntity[];

  constructor(partial: Partial<PetEntity>) {
    if (partial.gender !== undefined) {
      this.gender =
        typeof partial.gender === 'string'
          ? Gender[partial.gender as keyof typeof Gender]
          : partial.gender;
    }

    if (partial.category !== undefined) {
      this.category =
        typeof partial.category === 'string'
          ? Category[partial.category as keyof typeof Category]
          : partial.category;
    }

    Object.assign(this, partial);

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
