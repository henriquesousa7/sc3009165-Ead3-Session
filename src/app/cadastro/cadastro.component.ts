import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = new FormControl('');
  login = new FormControl('');
  senha = new FormControl('');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void {
    this.loginService.cadastrarUsuario(this.nome.value, this.login.value, this.senha.value).subscribe(res => {
      if (res.body.token && res.body.expiry) {
        sessionStorage.setItem("token", res.body.token);
        sessionStorage.setItem("expiry", res.body.expiry);
      }

      if (this.loginService.estaLogado()) {
        alert("Cadastrado com sucesso")
        this.nome.setValue("");
        this.login.setValue("");
        this.senha.setValue("");
      } else {
        alert("Falha no cadastro");
      }
    })
  }
}
