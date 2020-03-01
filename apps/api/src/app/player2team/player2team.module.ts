import { Module } from '@nestjs/common';
import { Player2teamService } from './player2team.service';
import { Player2teamController } from './player2team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player2Team } from './player2team.entity';
import { Player2TeamRepository } from './player2Team.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Player2Team, Player2TeamRepository])],
  controllers: [Player2teamController],
  providers: [Player2teamService],
  exports: [Player2teamService, TypeOrmModule],
})
export class Player2teamModule {}
