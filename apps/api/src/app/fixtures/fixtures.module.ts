import { Module } from '@nestjs/common';
import { FixturesController } from './fixtures.controller';
import { FixturesService } from './fixtures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixture } from './fixture.entity';
import { FixturesRepository } from './fixtures.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Fixture, FixturesRepository])],
  controllers: [FixturesController],
  providers: [FixturesService],
  exports: [FixturesService, TypeOrmModule],
})
export class FixturesModule {}
