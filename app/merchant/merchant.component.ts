import { Component, OnInit } from '@angular/core';
import {AutoapiService} from "../../app/service/autoapi.service"
import {ToastrManager} from "ng6-toastr-notifications"
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {


  model : any = {}

  constructor(private merchantapi : AutoapiService, private toast : ToastrManager) {
   
   }

   addmerchant(){
    
  this.merchantapi.requestData('admin/register-merchant',this.model).subscribe(resMerchat => {
    
    if(resMerchat.success){
    this.model = {};
    this.toast.successToastr(resMerchat.message,"Added")
    }
    else{
      this.toast.errorToastr(resMerchat.message,"Failed")
    }
  })
 
    
   }

  ngOnInit(): void {
    
  }
  

}
