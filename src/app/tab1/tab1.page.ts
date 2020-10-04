import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  arrayPosts: any;
  constructor(
    public navCtrl: NavController,
    public postServices: UserService
  ) {}
  
  ngOnInit() {
    this.postServices.getUser().then((data) => {
      this.arrayPosts = JSON.parse(data.data);
    })
    .catch((error) => {
      console.log(error.error);
    });
  }
}
