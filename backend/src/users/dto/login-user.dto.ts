import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  // @IsEmail()
  // @ApiProperty({ description: '이메일', example: 'test@example.com' })
  // email: string;

  // @IsNotEmpty()
  // @ApiProperty({ description: '비밀번호', example: 'password' })
  // password: string;

  @IsNotEmpty()
  @ApiProperty({ description: '사용자 ID', example: 'ZooMate' })
  userId: string;

  @IsNotEmpty()
  @ApiProperty({ description: '비밀번호', example: 'password' })
  userPassword: string;
}
