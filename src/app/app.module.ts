import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlyrModule } from 'ngx-plyr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlyrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
