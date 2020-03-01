import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { PlayersRepository } from './player.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Player, PlayersRepository])],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [PlayersService],

})
export class PlayersModule {

}
