import { Component } from '@angular/core';
import { WdApiService } from '../wd-api.service';
import { NgFor } from '@angular/common';
import { Kat } from '../kat';
import { Files } from '../files';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import 'moment/locale/pl';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [NgFor, FormsModule, MenuComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  public username: string = '';
  public kategorie: Kat[] = [];
  
  public get files(): Files[] {
    return this.wdApi.files;
  }
  public set files(files: Files[]) {
    this.wdApi.files = files;
  }

  public filename: string = '';
  private selKat: number = 0;
  public moment = moment.locale('pl');

  public filesFilter(){
    return this.files.filter((file) => {
      if(!this.selKat)
        return file.filename.toLowerCase().includes(this.filename.toLowerCase());
      else 
        return file.catid == this.selKat && file.filename.toLowerCase().includes(this.filename.toLowerCase());
    });
  }

  public formatDate(date:string){
    return moment(date).fromNow();
  }

  constructor(public wdApi: WdApiService) {
    moment.locale('pl');
  }

}
