import { Test, TestingModule } from '@nestjs/testing';
import { Team2fixtureService } from './team2fixture.service';

describe('Team2fixtureService', () => {
  let service: Team2fixtureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Team2fixtureService],
    }).compile();

    service = module.get<Team2fixtureService>(Team2fixtureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
