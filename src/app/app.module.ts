import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RadioButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule
  ],

  exports:[ 
          MatRadioModule,
          MatTableModule,
          MatCheckboxModule
          ],

  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
},
{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
