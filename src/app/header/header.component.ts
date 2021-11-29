import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  estaLogado: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.estaLogado = this.loginService.estaLogado();
  }

  deslogar(): void {
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
