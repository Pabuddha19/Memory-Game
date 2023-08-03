import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationHeaderComponent } from './components/notification-header/notification-header.component';
import { PlayAreaComponent } from './components/play-area/play-area.component';
import { StartDiagolueBoxComponent } from './components/start-diagolue-box/start-diagolue-box.component';

@NgModule({
  declarations: [AppComponent, NotificationHeaderComponent, PlayAreaComponent, StartDiagolueBoxComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
