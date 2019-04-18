# DupesFinder

This Challenge is solved with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

Programming Challenge: Take a variable number of identically structured json records and de-duplicate
the set.

An example file of records is given in the accompanying `leads.json`(stored in src/app/assets). Output should be same format, with dups reconciled  according to the following rules:

1. The data from the newest date should be preferred
2. duplicate IDs count as dups. Duplicate emails count as dups. Duplicate values elsewhere do not count as dups.
3. If the dates are identical the data from the record provided last in the list should be preferred

Simplifying assumption: the program can do everything in memory (don't worry about large files)

The application should also provide a log of changes including some representation of the source record, the output record and the individual field changes  (value from and value to) for each field.

## Development server

Go to the Dir and Run in terminal: `npm install`;

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
