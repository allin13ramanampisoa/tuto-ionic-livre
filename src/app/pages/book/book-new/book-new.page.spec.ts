import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookNewPage } from './book-new.page';

describe('BookNewPage', () => {
  let component: BookNewPage;
  let fixture: ComponentFixture<BookNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
