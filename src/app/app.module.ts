import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
