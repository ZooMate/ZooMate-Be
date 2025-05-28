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
  bread?: string;
  weight?: number;
  tag: string[];
  photos: string[];
  category: Category;

  ownerId?: number;
  owner: UserEntity;

  // answers?: AnswerEntity[];
  attachments?: AttachmentEntity[];

  constructor(partial: Partial<PetEntity>) {
    Object.assign(this, partial);
    if (partial.owner) {
      this.owner = new UserEntity(partial.owner);
    }
    // if (partial.answers) {
    //   this.answers = partial.answers.map((answer) => new AnswerEntity(answer));
    // }
    if (partial.attachments) {
      this.attachments = partial.attachments.map(
        (attachment) => new AttachmentEntity(attachment),
      );
    }
  }
}
