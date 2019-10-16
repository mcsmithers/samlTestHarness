import { UiLoginModule } from './../../../../libs/ui-login/src/lib/ui-login.module';
import { MaterialModule } from '@test-harness/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AccountsModule } from './accounts/accounts.module';
import { LoansModule } from './loans/loans.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HomeModule, AccountsModule, LoansModule, AppRoutingModule, UiLoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
