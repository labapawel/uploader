import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WdApiService } from './wd-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uploader';

  constructor(private wdApi: WdApiService) {
    //this.wdApi.login('admin', 'admin');

  }
}
