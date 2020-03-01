import { Test, TestingModule } from '@nestjs/testing';
import { Team2fixtureController } from './team2fixture.controller';

describe('Team2fixture Controller', () => {
  let controller: Team2fixtureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Team2fixtureController],
    }).compile();

    controller = module.get<Team2fixtureController>(Team2fixtureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
