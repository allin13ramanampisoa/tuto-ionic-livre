import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookIndexPage } from './book-index.page';

describe('BookIndexPage', () => {
  let component: BookIndexPage;
  let fixture: ComponentFixture<BookIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
