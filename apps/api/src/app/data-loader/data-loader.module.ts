import { Module } from '@nestjs/common';
import { DataLoaderService } from './data-loader.service';
import { DataLoaderController } from './data-loader.controller';
import { TeamsModule } from '../teams/teams.module';
import { PlayersModule } from '../players/players.module';
import { Player2teamModule } from '../player2team/player2team.module';
import { FixturesModule } from '../fixtures/fixtures.module';
import { Team2fixtureModule } from '../team2fixture/team2fixture.module';

@Module({
  imports: [TeamsModule, PlayersModule, Player2teamModule, FixturesModule, Team2fixtureModule],
  providers: [DataLoaderService],
  controllers: [DataLoaderController],
  exports: [DataLoaderService],
})
export class DataLoaderModule {}
