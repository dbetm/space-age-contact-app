import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
interface User {
    id : Number;
    profile_pic : string;
    name : string;
    birthdate :string;
    email : string;
    password : string;
    country : string;
    motto : string;
    description : string;
    points : Number;
    education : Number[];
    work : Number[];
    following : Number[];
    followers : Number[];
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HTTP) { }

  BASE_API = 'https://space-age-contact.herokuapp.com/api/'

  getUser() {
    console.log(this.BASE_API + 'users')
    //(url, params, headers)
    return this.http.get(this.BASE_API + 'users', {}, {})
  }
}
