import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppRoutingModule } from './app-routing.module';
import {WeatherService} from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeviceListComponent,
    AddDeviceComponent,
    DeviceDetailsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
