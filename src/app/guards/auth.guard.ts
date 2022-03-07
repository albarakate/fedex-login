import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ClientService } from "../services/client.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private clientService: ClientService) {}

  canActivate() {
    // Check if client is logged
    const isLogged = this.clientService.isLogged();

    // If logged, we authorize
    if (isLogged) {
      return true;
    }

    // If not logged we return to the login page
    this.router.navigate(['/client/login']);
    return false;
  }
}
