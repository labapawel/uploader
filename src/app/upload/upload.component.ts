import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { WdApiService } from '../wd-api.service';


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MenuComponent, FileUploadComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  constructor() { 

  }



}
