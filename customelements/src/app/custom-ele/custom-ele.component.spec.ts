import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEleComponent } from './custom-ele.component';

describe('CustomEleComponent', () => {
  let component: CustomEleComponent;
  let fixture: ComponentFixture<CustomEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
