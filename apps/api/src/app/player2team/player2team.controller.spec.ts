import { Test, TestingModule } from '@nestjs/testing';
import { Player2teamController } from './player2team.controller';

describe('Player2team Controller', () => {
  let controller: Player2teamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Player2teamController],
    }).compile();

    controller = module.get<Player2teamController>(Player2teamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
