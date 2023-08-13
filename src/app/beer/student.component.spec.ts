import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beerComponent } from './beer.component';

describe('StudentComponent', () => {
  let component: beerComponent;
  let fixture: ComponentFixture<beerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ beerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(beerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
