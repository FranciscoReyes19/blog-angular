//IMPORTS

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT COMPENENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
import { CategoryNewComponent} from './components/category-new/category-new.component';
import { PostNewComponent} from './components/post-new/post-new.component';
import { PostDetailComponent} from './components/post-detail/post-detail.component';

//DEFINIR LAS RUTAS
const appRoutes:Routes = [
   {path: '',component: HomeComponent},
   {path: 'inicio',component: HomeComponent},
   {path: 'login',component: LoginComponent},
   {path: 'logout/:sure',component: LoginComponent},
   {path: 'registro',component: RegisterComponent},
   {path: 'ajustes',component: UserEditComponent},
   {path: 'crear-post',component: PostNewComponent},
   {path: 'crear-categoria',component: CategoryNewComponent},
   {path: 'entrada/:id',component: PostDetailComponent},
   {path: '**',component: ErrorComponent}
];

// EXPORTAR CONFIGURACION

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);