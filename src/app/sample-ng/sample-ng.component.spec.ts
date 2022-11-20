import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNgComponent } from './sample-ng.component';

describe('SampleNgComponent', () => {
  let component: SampleNgComponent;
  let fixture: ComponentFixture<SampleNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
