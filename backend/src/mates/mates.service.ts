import { Injectable } from '@nestjs/common';
import { CreateMateDto } from './dto/create-mate.dto';
import { UpdateMateDto } from './dto/update-mate.dto';

@Injectable()
export class MatesService {
  create(createMateDto: CreateMateDto) {
    return 'This action adds a new mate';
  }

  findAll() {
    return `This action returns all mates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mate`;
  }

  update(id: number, updateMateDto: UpdateMateDto) {
    return `This action updates a #${id} mate`;
  }

  remove(id: number) {
    return `This action removes a #${id} mate`;
  }
}
