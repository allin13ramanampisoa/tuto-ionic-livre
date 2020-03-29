import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  isAuth: boolean;
  userConnecter: any;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private alertController: AlertController,
      private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.initForm();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          console.log(user);
          this.userConnecter = user;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onConnexion() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    this.authService.signInUser(email, password).then(
        () => {
          this.toastConnexion();
          this.router.navigate(['/tabs', 'tab1']);
        },
        (error) => {
          this.alertConnexion();
        }
    );
  }

  async toastConnexion() {
    const toast = await this.toastController.create({
      message: 'Vous êtes connecter.',
      duration: 4000
    });
    toast.present();
  }

  async alertConnexion() {
    const alert = await this.alertController.create({
      header: 'Erreur!',
      subHeader: 'Veuillez-vérifier les informations saisis.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
