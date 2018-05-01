import { TestBed, inject } from '@angular/core/testing';

import { ProjectmodelService } from './projectmodel.service';

describe('ProjectmodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectmodelService]
    });
  });

  it('should be created', inject([ProjectmodelService], (service: ProjectmodelService) => {
    expect(service).toBeTruthy();
  }));
});
