import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormControl('');
  senha = new FormControl('');

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  exibirMessages(): void {
    this.loginService.fazerLogin(this.login.value, this.senha.value).subscribe(res => {
      if (res.body.token && res.body.expiry) {
        sessionStorage.setItem("token", res.body.token);
        sessionStorage.setItem("expiry", res.body.expiry);
      }

      if (this.loginService.estaLogado()) {
        this.router.navigate(['/messages']);
      } else {
        alert("Login ou senha invalidos");
      }
    });
  }
}
