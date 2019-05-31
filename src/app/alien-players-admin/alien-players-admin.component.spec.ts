import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienPlayersAdminComponent } from './alien-players-admin.component';

describe('AlienPlayersAdminComponent', () => {
  let component: AlienPlayersAdminComponent;
  let fixture: ComponentFixture<AlienPlayersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienPlayersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienPlayersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
