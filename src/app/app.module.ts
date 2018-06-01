import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MessagesComponent } from './views/messages/messages.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewComponent } from './components/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MessagesComponent,
    SideNavComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
