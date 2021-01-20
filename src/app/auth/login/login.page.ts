import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async login() {
    console.log('login')
    this.router.navigateByUrl('/home', { replaceUrl: true })
  }

  async signup() {
    console.log("signup")
    this.router.navigateByUrl('auth/signup', { replaceUrl: true })
  }

  async forgotPass() {
    this.router.navigateByUrl('auth/forgotpassword', { replaceUrl: true })
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Third Party Authentication',
      message: 'We will recieve your profile details from your service provider',
      position: 'middle',
      color: 'warning',
      translucent: true,
      animated:true,
      buttons: [
        {
          side: 'end',
          // icon: 'star',
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }, {
          text: 'Disagree',
          // icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
