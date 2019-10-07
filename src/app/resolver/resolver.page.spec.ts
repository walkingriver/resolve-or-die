import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverPage } from './resolver.page';

describe('ResolverPage', () => {
  let component: ResolverPage;
  let fixture: ComponentFixture<ResolverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
