# Dev Docs

<!-- TOC -->

* [Dev Docs](#dev-docs)
  * [Issue List](#issue-list)
  * [Dev log](#dev-log)
  * [Objective](#objective)
    * [Backend](#backend)
    * [Frontend](#frontend)
    * [Techinical Requirement](#techinical-requirement)
    * [Review Point - need to be checked one by one](#review-point---need-to-be-checked-one-by-one)
    * [Delivery](#delivery)

<!-- /TOC -->

## Issue List - TODO

* [ ] As a User, I want to send email on a web page.
  * [ ] multiple receipients, CCs, BCCs, Text Email contents
  * [ ] result message
  * [ ] input validation
  * [ ] failover - email service
  * [ ] ask user when leaving the email page if email isn't sent
* [ ] make two versions of front angular
    * [ ] one with simple component based
    * [ ] the other with feature module based

## Issue List - DONE

## work log

* [X] create angular project ng-cli
* [X] make a page using material
* [X] make a interface for email form
* [X] make service that interacts with backend
* [ ] things I'm not done
  * [ ] clear button not doing anything yet
  * [ ] pop-up message for email que / result
  * [ ] disable send button after clicking
  * [ ] prevent page leave in the middle of writing email

* [X] create express backend project server
* [ ] create send email api
  * [X] register account at email services
  * [ ] config in the env & config
  * [ ] make functions to read account list and send email accordingly
* [ ] create send result-list if possible
* [ ] things I'm not done
  * [ ] none yet

## TODO

## Objective

Summary : The Software Engineer challenge v2.2 - email

* Service that accepts information and send emails.
* failover : Use two email service providers through abstracted layer/function for failover. If one email service goes down, quickly failover to the other service without affecting customers.
* Email Providers : these are free services, register new accounts for each.
  * Mailgun
  * SendGrid
  * if any of above have problems, alternative like amazon ses can be used.
* It should be able to send to mutilple receipients, CCs, BCCs. Email Body can just be plain text.

### Backend

* Provide Restful APIs
* No Authentication is needed
* Don't use HTTP client library. A simple HTTP client of choice can be used to handcraft HTTP requests.

### Frontend

* SendGrid / Mailgun API credentials should not be leaked to the frontend.
* No need to minify/uglify.
* Most modern browers should be supported. (-> test it)
* User friendly messages for errors and success
* Make UI look good. UI component can be used.

### Techinical Requirement

Fullstack Path : non cruicial features can be left unimplemented and listed in the TODO secion of the readme file. Be ready to discuss production readiness of this solution in your job interview ( what's missing and why etc)

### Review Point - need to be checked one by one

* Input Validation
* Error Handling
* Technical choices
* Clarity

### Delivery

* upload it on github - include README.md on how to build / deploy
* deploy the working solution
