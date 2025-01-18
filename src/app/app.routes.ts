import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "panel", component: PanelComponent}

];
