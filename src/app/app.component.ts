import { Component,OnInit,DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.services';
import {global} from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CategoryService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'Laravel project';
  public identity;
  public categories;
  public token;
  public url:string;


  constructor(
    private _userService: UserService,
    private _categoryService: CategoryService
  	){
    this.url = global.url;
  	this.loadUser();
  }

  ngOnInit(){
    console.log('Webapp cargada correctamente :)');
    console.log(this.identity);
    this.getCategories();
  }

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if (response.status == 'success') {
          this.categories = response.categories;
        }

      },
      error => {
          console.log(<any>error);
        }
      );
  }
}
