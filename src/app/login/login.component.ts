import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './LoginService/login-service.service';
import { LoginModel } from './Models/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService : LoginServiceService, private router : Router) { }
  LoginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  SignUpForm = new FormGroup({
    Name : new FormControl(''),
    Email : new FormControl(''),
    Password : new FormControl('') 
  })
  ngOnInit(): void {
  }

  Login(data : any){
    debugger;
    this.LoginService.Login(data.value).subscribe((res)=>{
      if(res.status == 'Success'){
        this.router.navigate(['/dashboard']);
      }
      else{
        // this.toastr.error('Something went wrong.', 'Error!');
      }
    });
  }
  SignUp(){
    console.log(this.SignUpForm);
  }
}
