import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TeoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-teo',
  templateUrl: 'teo.html'
})

export class TeoPage {

  constructor(public alertCtrl: AlertController) { }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Okay',
      message: "Tell me any secret.",
      inputs: [
        {
          name: 'title',
          placeholder: 'No one will hear it here'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
