import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { PermissionGuard } from '../auth/permission.guard';
import { FormGuard } from '../auth/form.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {path: 'add-user', component: AddUserComponent, canActivate:[PermissionGuard], canDeactivate:[FormGuard]},
      {path: 'add-product', component: AddProductComponent, canActivate:[PermissionGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
