import { Injectable } from '@angular/core';
import md5 from 'md5';
import { BehaviorSubject } from 'rxjs';
import { Kat } from './kat';
import { Files } from './files';

@Injectable({
  providedIn: 'root'
})
export class WdApiService {
  public wdauth: string = '';
  public userinfo: any = {};
  public kategorie: any = [];
  public files: Files[] = [];
  private katObs: BehaviorSubject<Kat[]> = new BehaviorSubject<Kat[]>([]);
  private filesObs: BehaviorSubject<Files[]> = new BehaviorSubject<Files[]>([]);
  public katId: number[] = [];

  constructor() { 
    this.wdauth = localStorage.getItem('wdauth') || '';
    this.info();
    this.getUploadKat(true);
    this.getUploadFiles();
  }

  get katSub(){
    return this.katObs.asObservable();
  }
  get filesSub(){
    return this.filesObs.asObservable();
  }

  get isLogged():boolean {
    return this.userinfo.studentid != undefined;
  }
  

  public getUploadKat(active:boolean=true){
   // if(this.isLogged){
    return fetch(`https://doha.wsi.edu.pl:10005/cats?wdauth=${this.wdauth}&active=${active}`)
      .then(response => response.json())
      .then(data => {
        this.kategorie = data;
        this.katObs.next(data);
      });
    //}
  }
  public getUploadFiles(){
   // if(this.isLogged){
    return fetch(`https://doha.wsi.edu.pl:10005/uploadz?wdauth=${this.wdauth}&catid=0&userid=0&after=0`)
      .then(response => response.json())
      .then(data => {
        this.files = data;
        this.katId = [...this.files.map((file) => file.catid)];
        this.filesObs.next(data);
      });
    //}
  }

  public info():void {
    
    fetch(`https://dziekanat.wsi.edu.pl/get/wd-auth/user?wdauth=${this.wdauth}`)
      .then(response => response.json())
      .then(data => {
        this.userinfo = data;
      });
  }

  public login(username: string, password: string):boolean{
    let md5pass = md5(password);
    fetch(`https://dziekanat.wsi.edu.pl/get/wd-auth/auth?album=${username}&pass=${md5pass}`)
        .then(response => response.text())
        .then(data => {
          if(data.length == 36){
            this.wdauth = data;
            localStorage.setItem('wdauth', data); 
            this.info();
            console.log('Zalogowano');           
          } else {
            localStorage.setItem('wdauth', ""); 
          }

          
        });
    
    return true;
  }
}
