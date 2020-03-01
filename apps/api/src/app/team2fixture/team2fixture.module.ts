import { Module } from '@nestjs/common';
import { Team2fixtureController } from './team2fixture.controller';
import { Team2fixtureService } from './team2fixture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team2Fixture } from './team2fixture.entity';
import { Team2FixtureRepository } from './team2fixture.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Team2Fixture, Team2FixtureRepository])],
  controllers: [Team2fixtureController],
  providers: [Team2fixtureService],
  exports: [Team2fixtureService],
})
export class Team2fixtureModule {}
