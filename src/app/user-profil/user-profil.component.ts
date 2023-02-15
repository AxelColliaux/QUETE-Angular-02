import { Component } from '@angular/core';
import { User } from "./user"

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {

  hiddenAge:boolean = false;

  user: User = new User("Doe", "John", 25, "", "https://randomuser.me/api/portraits/lego/2.jpg");

  toggleAge():boolean{
    return this.hiddenAge = !this.hiddenAge;
  }

}