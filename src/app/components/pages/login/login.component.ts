import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder, private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get loginFormcontrol() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    const user: FormControl = this.loginForm.get('username');
    const pass: FormControl = this.loginForm.get('password');
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginService.login(user.value, pass.value);
    } else {
      user.markAsDirty();
      user.markAsPristine({ onlySelf: true });
    }
  }

}
