import { TestBed } from '@angular/core/testing';

import { CategoryResolver } from './category-resolver.service';

describe('CategoryResolver', () => {
  let service: CategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
