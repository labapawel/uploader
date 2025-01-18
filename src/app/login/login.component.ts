import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WdApiService } from '../wd-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  constructor(private wdApi: WdApiService) {
    //this.wdApi.login('admin', 'admin');
  }

  public login(){
    this.wdApi.login(this.username, this.password);
  }



  
}
