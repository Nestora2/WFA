import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { LoginComponent } from './login/login.component';
import { DeviceListComponent } from './device-list/device-list.component';


import { CreateAccountComponent} from './create-account/create-account.component';
import { IngresaClaveComponent } from './ingresa-clave/ingresa-clave.component';




const routes: Routes = [
  { path: 'deviceDetail', component: DeviceDetailsComponent} ,
 { path: 'addDevice', component: AddDeviceComponent},
  { path: 'login', component: LoginComponent},
  {path: 'notifications', component: NotificationsComponent },
  {path: 'deviceList', component: DeviceListComponent },
  
  {path: 'iniciaSesion', component: IngresaClaveComponent },
  {path: 'createAccount', component: CreateAccountComponent },

 // { path: '**', component: LoginComponent}, // Aqui sera a donde regresara despues de presionar simbolo de home
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
