import { Component } from '@angular/core';
import moment from 'moment';
import 'moment/locale/pl';
import { WdApiService } from '../wd-api.service';
import { Kat } from '../kat';
import { Files } from '../files';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  
  public get kategorie(): Kat[] {
    return this.wdApi.kategorie;
  }
  public set kategorie(kategorie: Kat[]) {
    this.wdApi.kategorie = kategorie;
  }
  public get katId(): number[] {
    return this.wdApi.katId;
  }
  public set katId(katId: number[]) {
    this.wdApi.katId = katId;
  }

  public katFilter(){
    return this.kategorie.filter((kat) => {
      return this.katId.includes(kat.catid);
    });
  }

  public get files(): Files[] {
    return this.wdApi.files;
  }
  public set files(files: Files[]) {
    this.wdApi.files = files;
  }

  public countFiles(catid:number){
    return this.files.filter((file) => file.catid == catid).length || 0;
  }


  constructor(public wdApi: WdApiService) {
    moment.locale('pl');


  }


}
