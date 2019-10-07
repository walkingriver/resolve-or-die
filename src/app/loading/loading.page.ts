import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';
import { pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  sub;
  errorText = '';

  constructor(private data: DataService, private loading: LoadingController) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const loader = await this.loading.create({ message: 'Loading...' });
    await loader.present();
    this.errorText = '';
    this.sub = this.data.getError()
      .pipe(finalize(() => loader.dismiss()))
      .subscribe({
        error: (e => this.errorText = e.text),
      });
  }
}
