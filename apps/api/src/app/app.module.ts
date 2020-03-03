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
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    TeamsModule,
    PlayersModule,
    FixturesModule,
    Player2teamModule,
    DataLoaderModule,
    Team2fixtureModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/api/.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        NODE_ENV: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        TYPEORM_LOGGING: Joi.string().required(),
      })
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        logging: ["error"],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
