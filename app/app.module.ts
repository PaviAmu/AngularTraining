import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '../app/material/material.module';
import { FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ng6-toastr-notifications"
import { CarouselModule } from 'ngx-owl-carousel-o';

//components
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { RiderComponent } from './rider/rider.component';
import { MerchantComponent } from './merchant/merchant.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';

//SERVICE
import {AutoapiService} from "../app/service/autoapi.service"
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    RiderComponent,
    MerchantComponent,
    AboutComponent,
    TestComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
  ],
  providers: [AutoapiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
