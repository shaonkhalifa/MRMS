import { TestBed } from '@angular/core/testing';

import { AgentSyndicateService } from './agent-syndicate.service';

describe('AgentSyndicateService', () => {
  let service: AgentSyndicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentSyndicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
