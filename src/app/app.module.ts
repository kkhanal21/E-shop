import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './cmpnent/header/header.component';
import { FooterComponent } from './cmpnent/footer/footer.component';
import { ManubarComponent } from './cmpnent/manubar/manubar.component';
import { ContentComponent } from './cmpnent/content/content.component';
import { LgComponent } from './cmpnent/lg/lg.component';
import { SamsungComponent } from './cmpnent/samsung/samsung.component';
import { CgComponent } from './cmpnent/cg/cg.component';
import { RefrigaratorComponent } from './cmpnent/refrigarator/refrigarator.component';
import { TvComponent } from './cmpnent/tv/tv.component';
import { WashmachineComponent } from './cmpnent/washmachine/washmachine.component';
import { OtherComponent } from './cmpnent/other/other.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManubarComponent,
    ContentComponent,
    LgComponent,
    SamsungComponent,
    CgComponent,
    RefrigaratorComponent,
    TvComponent,
    WashmachineComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
