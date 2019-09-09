import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailReg } from '../models/emailReg';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  loginFacebook(data) {
    return this.http.post("https://test-api.live.gbksoft.net/rest/v1/user/login/facebook", data)
  }
  register(data:EmailReg) {
    return this.http.post("https://test-api.live.gbksoft.net/rest/v1/user/register", data)
  }
  singIn(data:EmailReg) {
    return this.http.post("https://test-api.live.gbksoft.net/rest/v1/user/login", data)
  }
  getCurrentUser() {
    return this.http.get("https://test-api.live.gbksoft.net/rest/v1/user/current")
  }
}
