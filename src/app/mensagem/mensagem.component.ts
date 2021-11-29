import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  formMensagem: FormGroup;
  //stexto = new FormControl('');
  mensagens : any;

  constructor(private mensagemService : MensagemService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    if (this.loginService.estaLogado()) {
      this.carregarMensagens();
    } else {
      this.router.navigate(['/']);
    }
  }  

  private initForm() {
    this.formMensagem = new FormGroup({
      texto: new FormControl("", [Validators.required, Validators.maxLength(500)]),
    })
  }

  carregarMensagens() {
    this.mensagemService.getMensagens().subscribe(res => {
      this.mensagens = res;
    });

  }

  // cadastrarMensagem() {
  //   if (this.loginService.estaLogado()) {
  //     this.mensagemService.cadastrarMensagem(this.texto.value).subscribe(res => {
  //       if(res.status == "OK") {
  //         alert("Mensagem cadastrada com sucesso")
  //       } else {
  //         alert("Erro ao cadastrar mensagem")
  //       }
  //     })
  //   }
  // }

  cadastrarMensagem() {

    if (this.loginService.estaLogado()) {
      console.log("Sim, estou logado! Vou executar a função");
    
    
    
      this.mensagemService.cadastrarMensagem(this.formMensagem.get("texto").value).subscribe(res => {
    
      console.log("Já mandei a requisição");
    
    
    
      if(res.status == "OK") {
        console.log("Parece tudo ok!");
        alert("Mensagem cadastrada com sucesso")
        window.location.reload();
      } else {
        console.log("Houve algum problema no comando!!");
        alert("Erro ao cadastrar mensagem")
      }

      console.log("Encerrando o tratamento");
    })
    } else {
      console.log("Não estou logado");
    }
    
  }

}
