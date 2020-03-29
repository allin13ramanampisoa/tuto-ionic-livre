import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookShowPage } from './book-show.page';

describe('BookShowPage', () => {
  let component: BookShowPage;
  let fixture: ComponentFixture<BookShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
