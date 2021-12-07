import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadGuard } from './auth/load.guard';
import { HomeComponent } from './home/home.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserResolver } from './user/user.resolver';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: 'noPermission', component: NoPermissionComponent},
  { path: '', component: HomeComponent},
  { path: 'users', component: UserListComponent},
  { path: 'users/user/:id', component: UserComponent, resolve: {
    user: UserResolver
  }},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [LoadGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
