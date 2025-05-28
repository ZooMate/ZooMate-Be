import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  // @IsEmail()
  // @ApiProperty({ description: '이메일', example: 'test@example.com' })
  // email: string;

  // @IsNotEmpty()
  // @ApiProperty({ description: '닉네임', example: 'test' })
  // nickname: string;

  // @MinLength(6)
  // @ApiProperty({ description: '비밀번호', example: 'password' })
  // password: string;

  @IsNotEmpty()
  @ApiProperty({ description: '사용자 ID', example: 'ZooMate' })
  userId: string;

  @IsNotEmpty()
  @ApiProperty({ description: '사용자 이름', example: '최우리' })
  userName: string;

  @MinLength(6)
  @ApiProperty({ description: '비밀번호', example: 'password' })
  userPassword: string;

  @ApiProperty({
    description: '소개글',
    example: '귀여운 초코푸들 마루가 있어요',
  })
  userDesc: string;
}
