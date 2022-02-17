import { Component, OnInit } from '@angular/core';
import {AutoapiService} from "../../app/service/autoapi.service"
import {ToastrManager} from "ng6-toastr-notifications"

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  model : any = {}
  constructor(private riderApi : AutoapiService,private toast : ToastrManager) { }

  addrider(){

    this.riderApi.requestData('admin/register-rider',this.model).subscribe(res => {
      if(res.success){
        this.model = "";
        this.toast.successToastr(res.message,"Added")
      }
      else{
        this.toast.errorToastr(res.message,"Failed")
      }
    })
  }

  ngOnInit(): void {
  }


  onReg() {
    alert("You have registered successfully!!");
  }

}
