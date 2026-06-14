import { TestBed } from '@angular/core/testing';
import { ProductResolver } from './product-resolver';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ProductResolver', () => {
  let service: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});