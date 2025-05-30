import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: '사용자 이름', example: '최우리' })
  userName?: string;
  @ApiProperty({ description: '비밀번호', example: 'password' })
  userPassword?: string;
  @ApiProperty({ description: '사용자 지역', example: '영등포구' })
  region?: string;
  @ApiProperty({
    description: '소개글',
    example: '귀여운 초코푸들 마루가 있어요!',
  })
  userDesc?: string;
  @ApiProperty({
    description: '프로필 이미지 URL',
    example: 'default',
  })
  profile?: string;
}
