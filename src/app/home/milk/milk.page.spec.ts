import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MilkPage } from './milk.page';

describe('MilkPage', () => {
  let component: MilkPage;
  let fixture: ComponentFixture<MilkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MilkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
