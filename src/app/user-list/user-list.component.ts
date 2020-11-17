import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { user } from './../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:user[];

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(result =>{
      this.users=result;
    })
  }
  removeUser(User, index) {
    if(window.confirm('Are you sure?')) {
        this.userservice.deleteUserById(User._id).subscribe((data) => {
          this.users.splice(index, 1);
        })
      }
    }

}
