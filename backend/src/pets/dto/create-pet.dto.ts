import { ApiProperty } from '@nestjs/swagger';
import { Category, Gender } from '../entities/pet.entity';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsOptional,
  IsEnum,
  IsString,
} from 'class-validator';

export class CreatePetDto {
  // @IsNotEmpty()
  // @ApiProperty({ description: '게시글 제목', example: '게시글 제목' })
  // title: string;

  // @IsNotEmpty()
  // @ApiProperty({ description: '게시글 내용', example: '게시글 내용' })
  // content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '반려동물 이름', example: '최마루' })
  petName: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ description: '반려동물 나이', example: '2살' })
  age: number;

  @IsEnum(Gender)
  @ApiProperty({
    example: Gender.female,
    enum: Gender,
    description: '성별',
  })
  gender: Gender;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: '중성화 여부', example: 'true' })
  isNetering: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: '프로필 공개 여부', example: 'true' })
  isPublic: boolean;

  @IsOptional()
  @ApiProperty({
    description: '품종 (선택사항)',
    example: '초코푸들',
    required: false,
  })
  bread?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: '몸무게 (선택사항)',
    example: '5',
    required: false,
  })
  weight?: number;

  @IsArray()
  @ApiProperty({
    description: '성격 태그',
    example: ['깨발랄', '활기참', '호기심', '먹는 게 최고', '귀여움'],
  })
  tag: string[];

  @IsArray()
  @ApiProperty({ description: '프로필 이미지 URL', example: ['url1.jpg'] })
  photos: string[];

  @IsEnum(Category)
  @ApiProperty({
    description: '반려동물 분류',
    example: Category.dog,
    enum: Category,
  })
  category: Category;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: '소유자 ID', example: '1' })
  ownerId: number;
}
