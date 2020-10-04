import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }
  getPosts(){
      return this.http.get<User[]>("https://space-age-contact.herokuapp.com/api/users/2/").map(data => console.log(data));
 }

}
