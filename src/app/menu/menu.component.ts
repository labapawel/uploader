import { Component } from '@angular/core';
import moment from 'moment';
import 'moment/locale/pl';
import { WdApiService } from '../wd-api.service';
import { Kat } from '../kat';
import { Files } from '../files';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public search: string = '';

  get selKat(): Kat {
    return this.wdApi.selKat;
  }

  public select(kategoria: Kat){
    if(this.wdApi.selKat == kategoria)
    {
      this.wdApi.selKat =  {catid: 0, name: '', active: true}
    } else
    this.wdApi.selKat = kategoria;
  }


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
      return (this.search == "" && this.katId.includes(kat.catid)) || (this.search != "" && kat.name.toLowerCase().includes(this.search.toLowerCase()));
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

  public upload(){
    this.router.navigate(['/upload']);
  }

  public logout(){
    this.wdApi.logout();
  }

  constructor(public wdApi: WdApiService, private router: Router) {
    moment.locale('pl');


  }




}
