import { Component } from '@angular/core';
import { WdApiService } from '../wd-api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  public plik: File = new File([], '');

  onDrop(event: DragEvent) : void{
    event.preventDefault();
    event.stopPropagation();
    console.log('dropped' );
    if(event.dataTransfer && event.dataTransfer.files){
      // console.log('files', event.dataTransfer.files);

      this.wdApi.uploadFile(event.dataTransfer.files[0], this.wdApi.selKat.catid);
      
    }
  }
  

    wyslij(): void {
    console.log(this.plik);
    
    //  this.wdApi.uploadFile(this.plik, this.wdApi.selKat.catid);
    }
  get kat(): number {
    return this.wdApi.selKat.catid;
  }

  constructor(private wdApi: WdApiService, private router: Router) { 
    
  }

  public panel(){
   this.wdApi.panel();
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
