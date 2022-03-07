import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from "./client.routing.module";
import { ClientComponent } from "./client.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class ClientModule { }
