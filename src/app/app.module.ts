import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColLComponent } from './col-l/col-l.component';
import { ColLContentComponent } from './col-l-content/col-l-content.component';
import { ColRComponent } from './col-r/col-r.component';
import { BlockMessageComponent } from './block-message/block-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColLComponent,
    ColLContentComponent,
    ColRComponent,
    BlockMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
