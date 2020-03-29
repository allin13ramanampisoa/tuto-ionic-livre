import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private toastController: ToastController
) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  async toastConnexion() {
    const toast = await this.toastController.create({
      message: 'Vous êtes connecter.',
      duration: 4000
    });
    toast.present();
  }

  onInscription() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.authService.createNewUser(email, password).then(
        () => {
          this.toastConnexion();
          this.router.navigate(['/tabs', 'tab1']);
        },
        (error) => {
          this.errorMessage = error;
        }
    );
  }

}
