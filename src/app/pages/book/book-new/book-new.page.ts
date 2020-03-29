import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../services/book.service';
import {Router} from '@angular/router';
import {Book} from '../../../models/book';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.page.html',
  styleUrls: ['./book-new.page.scss'],
})
export class BookNewPage implements OnInit {

  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(
      private formBuilder: FormBuilder,
      private booksService: BookService,
      private router: Router,
      private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;

    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photo = this.fileUrl;
    }
    this.booksService.createNewBook(newBook);
    this.toastLivreOK();
    this.router.navigate(['/tabs/tab1']);
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
        (url: string) => {
          this.fileUrl = url;
          this.fileIsUploading = false;
          this.fileUploaded = true;
        },
        (err) => {
          console.log('Erreur Upload:' + err);
        }
    );
  }

  async toastLivreOK() {
    const toast = await this.toastController.create({
      message: 'Livre enregitrer.',
      duration: 4000
    });
    toast.present();
  }

}
