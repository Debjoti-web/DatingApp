import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [	
    AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MemberDetailComponent,
      ListsComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,
     BrowserAnimationsModule,FormsModule,BsDropdownModule.forRoot(),
     ToastrModule.forRoot({
       positionClass:'toast-bottom-right',
      
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
