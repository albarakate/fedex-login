import { Injectable } from "@angular/core";
import { ClientModel } from "../models/client.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {

  constructor(private http: HttpClient) {}

  /*
  * Method to login
  * */
  login(client: ClientModel) : Observable<ClientModel> {
    return this.http.post<ClientModel>(`${environment.apiUrl}/users`,
      {
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email
      }).pipe(map( (client: ClientModel) => {
        // Returned data from the API
        // Check if the client is defined
        if (client && client._id) {
          // We save client in local storage
          localStorage.setItem('client', JSON.stringify(client));
        }
        return client;
    }))
  }

  /*
  * Check if the client is logged
  * */
  isLogged() : boolean {
    // We get the local storage value
    return localStorage.getItem('client') ? true : false;
  }

  /*
  * Method to logout
  * */
  logout() : void {
    // We remove the key from the local storage
    localStorage.removeItem('client');
  }

  /*
  * Method to get the client
  * */
  getClient() : ClientModel | null {
    // Check if the client exist in local storage
    if (localStorage.getItem('client')) {
      const clientString: string = String(localStorage.getItem('client') || '');
      return JSON.parse(clientString);
    } else {
      return null;
    }
  }
}
