import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ description: '사용자 ID', example: 'ZooMate' })
  userId: string;

  @IsNotEmpty()
  @ApiProperty({ description: '사용자 이름', example: '최우리' })
  userName: string;

  @MinLength(6)
  @ApiProperty({ description: '비밀번호', example: 'password' })
  userPassword: string;

  @IsNotEmpty()
  @ApiProperty({ description: '사용자 지역', example: '서초구' })
  region: string;

  @IsOptional()
  @ApiProperty({
    description: '소개글',
    example: '귀여운 초코푸들 마루가 있어요',
  })
  userDesc?: string;

  @IsOptional()
  @ApiProperty({
    description: '프로필 이미지 URL',
    example: 'default',
  })
  profile?: string;
}
