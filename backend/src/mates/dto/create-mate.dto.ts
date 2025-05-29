import { IsInt } from 'class-validator';

export class CreateMateDto {
  @IsInt()
  userId: number;

  @IsInt()
  petId: number;
}
