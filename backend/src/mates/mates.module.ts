import { Module } from '@nestjs/common';
import { MatesService } from './mates.service';
import { MatesController } from './mates.controller';

@Module({
  controllers: [MatesController],
  providers: [MatesService],
})
export class MatesModule {}
