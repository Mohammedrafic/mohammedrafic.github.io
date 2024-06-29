import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './Loader/spinner/spinner.component';
import { LoadingInterceptor } from './Loader/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
