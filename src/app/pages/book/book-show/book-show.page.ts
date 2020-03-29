import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.page.html',
  styleUrls: ['./book-show.page.scss'],
})
export class BookShowPage implements OnInit {

  book: Book;

  constructor(
      private route: ActivatedRoute,
      private booksService: BookService,
      private router: Router,
      private alertController: AlertController
  ) {}

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params.id;
    this.booksService.getSingleBook(+id).then(
        (book: Book) => {
          this.book = book;
        }
    );
  }

  async alertSuppressionConfirm(book: Book) {
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      message: 'Voulez-vous supprimer le livre <br> Titre: <strong>' + book.title + '</strong>!!!',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.supprimerLivre(book);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  supprimerLivre(book: Book) {
    this.booksService.removeBook(book);
    this.router.navigate(['/tabs', 'tab1']);
  }


}

