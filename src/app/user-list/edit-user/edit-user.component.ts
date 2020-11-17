import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from './../../services/user.service';
import { user } from './../../models/user.model'
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:string;
  username="";
  email="";
  user:user={
    username:"",
    email:"",
    _id:"",

  }
  @ViewChild('editForm') editForm: NgForm;

  constructor(private userservice:UserService,private Route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id= this.Route.snapshot.params['id'];
    this.user._id=this.id;
    this.userservice.getUserById(this.id).subscribe(result =>{
        this.user.username=result['username'],
        this.user.email=result['email']
    });
  }

  Update(){
    this.userservice.updateUserById(this.user,this.id).subscribe(result =>{
      console.log(this.user);
      console.log(result);
      this.user=result;
    })
  }
}



