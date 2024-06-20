import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignIn } from './login/signIn.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { JobDetail } from './client/jobDetailPage/jobdetail.component';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SignIn,
  },
  {
    path: 'jobs/:id',
    component: JobDetail,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
