import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  loggedIn:boolean;
  cusrrentUser$:Observable<User>;
  constructor(public accountService:AccountService, private router:Router,
     private toastr:ToastrService) { }

  ngOnInit(): void {
   // this.getCurrentUser();
  this.cusrrentUser$=this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('/members');
      //this.loggedIn=true;
    }, error=>{console.log(error);
    this.toastr.error(error.error)})
   
  }
  logout(){
    this.accountService.logout();
    //this.loggedIn=false;
    this.router.navigateByUrl('/');
  }
 
}
