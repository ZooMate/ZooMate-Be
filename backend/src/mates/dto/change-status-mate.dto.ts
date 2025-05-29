import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ChangeStatusMateDto {
  @IsInt()
  @ApiProperty({ description: '찜한 사용자 ID', example: 1 })
  userId: number;

  @IsInt()
  @ApiProperty({ description: '찜한 반려동물 ID', example: 1 })
  petId: number;
}
