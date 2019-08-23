import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ContactService } from './services/contact.service';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'contacts',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/contacts/contacts.module')
      .then(module => module.ContactsModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(module => module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
