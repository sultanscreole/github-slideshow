import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  async resetPassword() {
    console.log('Reset Password')
    this.presentAlertConfirm()
  }

  async login() {
    this.router.navigateByUrl('auth/login', { replaceUrl: true })
  }

  async signup() {
    this.router.navigateByUrl('auth/signup', { replaceUrl: true })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm !',
      message: 'Note: <strong>You will receive an email with a link to reset your password</strong> !!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigateByUrl('auth/login', { replaceUrl: true })
          }
        }
      ]
    });

    await alert.present();
  }

}
