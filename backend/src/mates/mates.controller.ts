import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MatesService } from './mates.service';
import { ChangeStatusMateDto } from './dto/change-status-mate.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('mates')
export class MatesController {
  constructor(private readonly matesService: MatesService) {}

  // 찜 등록
  @Post()
  createMate(@Body() createMateDto: ChangeStatusMateDto) {
    return this.matesService.createMate(createMateDto);
  }

  // 기존 방식
  // @Get(':userId')
  // @ApiOperation({ summary: '유저가 찜한 펫 목록 조회' })
  // async getLikedPets(@Param('userId') userId: string) {
  //   const pets = await this.matesService.findLikedPetsByUser(Number(userId));
  //   return pets;
  // }

  // 숫자인지 자동 검증하여 아닐 경우, 400 에러 반환
  // 명시적 형 변환은 예외처리를 해주어야 하지만 ParseIntPipe는 이걸 안 해도 됨
  @Get(':userId')
  @ApiOperation({ summary: '유저가 찜한 펫 목록 조회' })
  async getPets(@Param('userId', ParseIntPipe) userId: number) {
    const pets = await this.matesService.findPetsByUser(userId);
    return pets;
  }

  // 찜 해제
  @Delete()
  deleteMate(@Body() createMateDto: ChangeStatusMateDto) {
    return this.matesService.deleteMate(createMateDto);
  }
}
