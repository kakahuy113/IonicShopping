import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeefPage } from './beef.page';

describe('BeefPage', () => {
  let component: BeefPage;
  let fixture: ComponentFixture<BeefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
