import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatesService } from './mates.service';
import { CreateMateDto } from './dto/create-mate.dto';
import { UpdateMateDto } from './dto/update-mate.dto';

@Controller('mates')
export class MatesController {
  constructor(private readonly matesService: MatesService) {}

  @Post()
  create(@Body() createMateDto: CreateMateDto) {
    return this.matesService.create(createMateDto);
  }

  @Get()
  findAll() {
    return this.matesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateDto: UpdateMateDto) {
    return this.matesService.update(+id, updateMateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matesService.remove(+id);
  }
}
