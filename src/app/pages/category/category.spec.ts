import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category } from './category';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Category', () => {
  let component: Category;
  let fixture: ComponentFixture<Category>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Category]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Category);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});