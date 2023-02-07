import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinDetailComponent } from './components/coin-detail/coin-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
