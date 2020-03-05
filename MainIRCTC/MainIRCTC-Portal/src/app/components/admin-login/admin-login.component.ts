import { Component, OnInit,  } from "@angular/core"
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{Router}  from '@angular/router'
import { RxFormBuilder, IFormGroup, and } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
adminFormGroup:FormGroup;
  constructor(private router:Router,private adminFormBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.adminFormGroup=this.adminFormBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })

  }
  onclick(){
    if(this.adminFormGroup.controls.userName.value=="admin" && this.adminFormGroup.controls.password.value=="admin"){
      this.router.navigateByUrl('/city/add')
    }
   else{
     this.router.navigateByUrl('/admin-login')
   }
   console.log(this.adminFormGroup)
   }
}
