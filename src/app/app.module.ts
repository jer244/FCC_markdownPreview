import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MdInputComponent } from './md-input/md-input.component';
import { MdOutputComponent } from './md-output/md-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MdInputComponent,
    MdOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
