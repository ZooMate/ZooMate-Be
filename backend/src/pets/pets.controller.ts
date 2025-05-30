import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AzureStorageInterceptor } from 'src/azure-storage/azure-storage.interceptor';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetEntity } from './entities/pet.entity';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
@ApiTags('pets')
@ApiBearerAuth()
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('pets')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
      },
      fileFilter: (req, file, cb) => {
        const allowedType = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'application/pdf',
        ];
        if (allowedType.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('Invalid file type'), false);
        }
      },
    }),
    AzureStorageInterceptor,
  )
  @ApiOperation({ summary: '반려동물 등록' })
  async createPet(@Request() req, @Body() dto: CreatePetDto) {
    const pet = await this.petsService.createPet(req.user.id, dto, req.files);
    if (!pet) throw new BadRequestException('Pet Creation Failed');
    return new PetEntity(pet);
  }

  // 반려동물 전체 목록
  @Get('pets')
  @ApiOperation({ summary: '반려동물 전체 목록' })
  async getPets() {
    const pets = await this.petsService.getPets();
    return pets.map((pet) => new PetEntity(pet || {}));
  }

  // 반려동물 상세 정보
  @Get('pets/:id')
  @ApiOperation({ summary: '반려동물 상세' })
  async getPetById(@Param('id') id: string) {
    const pet = await this.petsService.getPetById(Number(id));
    return new PetEntity(pet || {});
  }

  // 반려동물 정보 수정
  @UseGuards(JwtAuthGuard)
  @Patch('pets/:id')
  @ApiOperation({ summary: '반려동물 정보 수정' })
  async updatePet(
    @Request() req,
    @Param('id') id: string,
    @Body() dto: UpdatePetDto,
  ) {
    const pet = await this.petsService.updatePet(Number(id), req.user.id, dto);
    return new PetEntity(pet || {});
  }

  // 반려동물 정보 삭제
  @UseGuards(JwtAuthGuard)
  @Delete('pets/:id')
  @ApiOperation({ summary: '반려동물 정보 삭제' })
  async deletePet(@Request() req, @Param('id') id: string) {
    return this.petsService.deletePet(Number(id), req.user.id);
  }
}
