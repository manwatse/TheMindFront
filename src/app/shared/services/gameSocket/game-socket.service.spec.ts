import { TestBed } from '@angular/core/testing';

import { GameSocketService } from './game-socket.service';

describe('GameSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSocketService = TestBed.get(GameSocketService);
    expect(service).toBeTruthy();
  });
});
