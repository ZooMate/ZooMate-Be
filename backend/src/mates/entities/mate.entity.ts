import { PetEntity } from 'src/pets/entities/pet.entity';

export class MateEntity {
  userId: number;
  petId: number;
  pet: PetEntity;

  constructor(partial: Partial<MateEntity>) {
    Object.assign(this, partial);

    if (partial?.pet) {
      this.pet = new PetEntity(partial.pet);
    }
  }
}
