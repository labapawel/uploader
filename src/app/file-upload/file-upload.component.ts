import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  onDrop(event: DragEvent) : void{
    event.preventDefault();
    event.stopPropagation();
    console.log('dropped' );
    if(event.dataTransfer && event.dataTransfer.files){
      console.log('files', event.dataTransfer.files);
      
    }
  }

  onDragOver(event: DragEvent) : void {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) : void {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('drag-over');
  }
}
