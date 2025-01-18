import { Component } from '@angular/core';
import { WdApiService } from '../wd-api.service';
import { NgFor } from '@angular/common';
import { Kat } from '../kat';
import { Files } from '../files';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import 'moment/locale/pl';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  public username: string = '';
  public kategorie: Kat[] = [];
  public files: Files[] = [];
  private katId: number[] = [];
  public filename: string = '';
  private selKat: number = 0;
  public moment = moment.locale('pl');

  public katFilter(){
    return this.kategorie.filter((kat) => {
      return this.katId.includes(kat.catid);
    });
  }

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


  public countFiles(catid:number){
    return this.files.filter((file) => file.catid == catid).length || 0;
  }

  constructor(public wdApi: WdApiService) {
    moment.locale('pl');


    wdApi.katSub.subscribe((kats) => {
      this.kategorie = kats;
    });


    wdApi.filesSub.subscribe((files) => {
      this.files = files;
      this.katId = [...this.files.map((file) => file.catid)];
    });

    //this.wdApi.login('admin', 'admin');
    // this.wdApi.info();
    // this.username = `${this.wdApi.userinfo.imie} ${this.wdApi.userinfo.nazwisko}`;

  }

}
