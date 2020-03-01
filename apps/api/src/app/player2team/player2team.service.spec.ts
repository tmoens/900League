import { Test, TestingModule } from '@nestjs/testing';
import { Player2teamService } from './player2team.service';

describe('Player2teamService', () => {
  let service: Player2teamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Player2teamService],
    }).compile();

    service = module.get<Player2teamService>(Player2teamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
