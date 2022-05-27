import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestandWithLatestFromComponent } from './combine-latestand-with-latest-from.component';

describe('CombineLatestandWithLatestFromComponent', () => {
  let component: CombineLatestandWithLatestFromComponent;
  let fixture: ComponentFixture<CombineLatestandWithLatestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestandWithLatestFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestandWithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
