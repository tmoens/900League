import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { FixturesModule } from './fixtures/fixtures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player2teamModule } from './player2team/player2team.module';
import { DataLoaderModule } from './data-loader/data-loader.module';
import { Team2fixtureModule } from './team2fixture/team2fixture.module';

@Module({
  imports: [
    TeamsModule,
    PlayersModule,
    FixturesModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "900_league",
      password: "900_league",
      database: "900_league",
      synchronize: true,
      logging: ["error", "query"],
      autoLoadEntities: true}),
    Player2teamModule,
    DataLoaderModule,
    Team2fixtureModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {

}
