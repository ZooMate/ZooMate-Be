import { PartialType } from '@nestjs/swagger';
import { CreateMateDto } from './create-mate.dto';

export class UpdateMateDto extends PartialType(CreateMateDto) {}
