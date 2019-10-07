import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {
  sub;
  dataText = '';
  errorText = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.dataText = '';
    this.errorText = '';
    this.sub = this.data.getError()
      .subscribe({
        error: (e => this.errorText = e.text),
      });
  }
}
