import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SearchComponent,
    PricingComponent,
    LoginComponent,
    SignupComponent,
    Card1Component,
    Card2Component,
    Card3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    RouterModule.forRoot([
      {path: 'home', component: BodyComponent},
      {path: 'search', component: SearchComponent},
      {path: 'pricing', component: PricingComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', component: BodyComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
