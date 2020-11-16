import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from './../../models/company'
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.css']
})
export class EditCompaniesComponent implements OnInit {
  id:string;
  company:Company={
    _id:"",
    name:"",
    price:"",
    quantity:""
  }

  constructor(private companyservice:CompanyService,private Route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id= this.Route.snapshot.params['id'];
    this.company._id=this.id;
    this.companyservice.getCompanyById(this.id).subscribe(result =>{
        console.log(result)
        this.company.name=result['name'],
        this.company.price=result['price'],
        this.company.quantity=result['quantity']
    });
  }

  Update(){
    this.companyservice.updateCompanyById(this.company,this.id).subscribe(result =>{
      console.log(this.company);
      this.company=result;
    })
  }
}
