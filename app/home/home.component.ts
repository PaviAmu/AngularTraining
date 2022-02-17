import { Component, OnInit } from '@angular/core';
import { AutoapiService } from '../service/autoapi.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model : any = {}
  

  ngOnInit() {
    
  }

  constructor(private customerApi: AutoapiService , private toast : ToastrManager ) {   }
  addcustomer(){
    this.customerApi.requestData('admin/register',this.model).subscribe(res => {
      if(res.success){
       this.model = "";
        
        this.toast.successToastr(res.message,"ADDED")
        
      }
      else{
        this.toast.errorToastr(res.message,"Failed")
      }
    })
  }

  selected = 0;
  hovered = 0;
  readonly = false;


}
