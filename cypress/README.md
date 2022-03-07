# 1. Get started
## A. Install
Run `npm install --only=dev` if not already done.

## B. Commands
`"cypress:open"` : Run cy with interactive display (Good for development)  
`"cypress:open-full"` :  Run cy with interactive display and clean reports in app folders  
`"cypress:run"` : Run cy with terminal display (Must do before pushing your code)  
`"cypress:run-full"` : Run cy with terminal display and clean report and generate new reports  
`"cypress:clean-report"` : Clean cy reports in app folder  
`"cypress:merge-report-mocha"` : Merge all mochawesome report into one report   
`"cypress:merge-report-junit"` : Merge all junit report into one report  
`"cypress:report-html"` : Get merged mochawesome report and generate fancy html report  
`"cypress:ci"` : Used in jenkins : ng serve + `cypress:run-full`

## C. How to run cypress tests
1 - Start the application in dev mode `npm run start` from App folder  
2 - Start cypress `npm run "cypress:open"` or `"npm run cypress:run"` from App folder This launches the cypress console  
3 - Then run all the tests or a specific .js test file from this cypress console.

## D. How to develop cypress tests
1 - Start the application in dev mode `npm run start` from App folder  
2 - Start cypress `npm run "cypress:open"`  
3 - Create test file in `app/cypress/integrations/your_folder/your_file`

# 3. What you should know before testing with cypress
## 1. Basics
### A. Use cypress attribute selectors
You should always use `data-cy` attribute instead of selecting element by class name.

Bad :   
`<div class="timeline-type"></div>` & `cy.get('.timeline-type')`

Good :  
`<div data-cy="timeline-type"></div>` & `cy.get('[data-cy=timeline-type]')`  
`[attr.data-cy]="user.name"` Allow you to have dynamic data-cy
