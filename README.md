# FedexLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Please read the README file located in Cypress folder.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes 

1 - Architecture

- /components/client/login: folder that contains a login component. This is the page displayed when the client is not logged.
- /components/client/register: folder that contains a register component. Not in the scope.
- /components/home : contains the home page component. When the user log in, he lands to the home page. It contains the data retrieved from the API call and a logout link.
- /guards : it contains the guard to secure the home page component form an unauthorised user.
- /models : it contains one interface that is the definition of a client (Typescript view)
- /services : it contains one service defined as a singleton. Different methods : login, logout, isLogged, getClient
- Use a routing module to define some basics routing rules.

2 - Styling

I used a basic styling that is responsive for my application without using any framework. I am familiar with bootstrap but no need here to use it.
I chose the visual identity of Fedex to (login, orange and violet colour). For errors, I chose the red color.

3 - Unit testing

I did just one test for the ClientService using Jasmine.

4 - E2E testing

The most important testing for this app is the end to end testing. I did several tests and wrote a README file in Cypress folder.

5 - Technical choices

- For the form, I used the FormGroup, FormControl, basics validators and create a custom validator for the password.
- I created a Client Component that routes to login or register component depending the URL
- I saved the user infos in the local storage that is removed when the user logs out. But if we had more time, we could use a JWT token (but with a backend that creates a JWT string. This string will be put in each request in Authorisation header
