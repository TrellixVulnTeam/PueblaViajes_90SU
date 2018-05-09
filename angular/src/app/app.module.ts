import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViajesCardsComponent } from './viajes-cards/viajes-cards.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SalidasProximasComponent } from './salidas-proximas/salidas-proximas.component';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { ViajeFormComponent } from './viaje-form/viaje-form.component';
import { RegistroComponent } from './registro/registro.component'; // <-- NgModel lives here
import { AuthService } from './services/auth.service';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViajesCardsComponent,
    CalendarComponent,
    SalidasProximasComponent,
    ViajeFormComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
