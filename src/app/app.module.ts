import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GreatGrandChildComponent } from './great-grand-child/great-grand-child.component';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    GreatGrandChildComponent,
    FemaleComponent,
    MaleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
