import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { Navbar } from './shared/navBar/navbar.component';
import { SignIn } from './login/signIn.component';
import { JobService } from './services/job.service';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { Hero } from './client/components/hero/hero.component';
import { JobDetail } from './client/jobDetailPage/jobdetail.component';
import { JobList } from './shared/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './admin/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    SignIn,
    Navbar,
    Hero,
    JobList,
    JobDetail,
    ModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
