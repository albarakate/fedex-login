import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { ClientModel } from "../../models/client.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  client!: ClientModel | null;
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getClient();
  }

  logOut(): void {
    this.clientService.logout();
    this.router.navigate(['/client/login']);
  }
}
