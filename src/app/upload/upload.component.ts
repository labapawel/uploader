import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MenuComponent, FileUploadComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  

}
