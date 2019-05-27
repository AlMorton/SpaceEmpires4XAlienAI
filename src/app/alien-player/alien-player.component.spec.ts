import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienPlayerComponent } from './alien-player.component';

describe('AlienPlayerComponent', () => {
  let component: AlienPlayerComponent;
  let fixture: ComponentFixture<AlienPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
