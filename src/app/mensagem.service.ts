import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  baseURL = "https://tiagoifsp.ddns.net/mensagens/jwt/msg.php";
  
  constructor(private http: HttpClient, private loginService: LoginService) { }

  cadastrarMensagem(texto: string): Observable<any> {
    let body = new HttpParams();
    body = body.set("texto", texto);

    return this.http.put<any>(this.baseURL, body);
  }

  getMensagens(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  };
}
