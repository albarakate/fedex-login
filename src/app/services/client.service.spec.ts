import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientService } from "./client.service";
import { ClientModel } from "../models/client.model";
import { HttpClientModule } from "@angular/common/http";
import { environment } from '../../environments/environment';

describe('ClientService', () => {
  let clientService: ClientService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        ClientService
      ],
    });
    clientService = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be a POST request', fakeAsync(() => {
    const client: ClientModel = {
      firstName: 'James',
      lastName: 'Dupont',
      email: 'james.dupont@gmail.com'
    }

    // Call the login
    clientService.login(client).subscribe();

    // Test the request, the method and the body
    const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      firstName: 'James',
      lastName: 'Dupont',
      email: 'james.dupont@gmail.com',
    });
  }));
});
