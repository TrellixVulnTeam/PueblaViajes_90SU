import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


import { AppComponent }  from './app.component';
 
@NgModule({
    	imports: [BrowserModule, FormsModule, HttpClientModule,HttpModule],
    declarations: [AppComponent],
    providers: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

