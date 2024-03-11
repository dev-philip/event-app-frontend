import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsoPageComponent } from './rso-page.component';

describe('RsoPageComponent', () => {
  let component: RsoPageComponent;
  let fixture: ComponentFixture<RsoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
