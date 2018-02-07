# Dev Docs

<!-- TOC -->

* [Dev Docs](#dev-docs)
  * [Issue List](#issue-list)
  * [Dev log](#dev-log)

<!-- /TOC -->

## Issue List

* [X] As a User, I want to send email on a web page.
  * [X] multiple receipients, CCs, BCCs, Text Email contents
  * [X] result message
  * [X] input validation
  * [X] failover - email service
  * [X] ask user when leaving the email page if email isn't sent
* [-] make two versions of front angular
    * [X] one with simple component based
    * [-] the other with feature module based

## work log

* [X] create angular project ng-cli
* [X] make a page using material
* [X] make a interface for email form
* [X] make service that interacts with backend
* [ ] things I'm not done
  * [X] clear button not doing anything yet
  * [X] pop-up message for email que / result
  * [X] prevent repetitive submit
  * [X] prevent page leave in the middle of writing email
  * [-] input validation -> used RegExp validator but consider observable and check function
    * [X] input validation for blank subject and contents. -> sendGrid doesn't allow blank subject, thus it's a required field, user doesn't have choice.
    * [X] when validator error, show messages too
  * [X] more test cases
* [X] code linting

* [X] create express backend project server
* [X] create send email api
  * [X] register account at email services
  * [X] config in the env & config
  * [X] make functions to read account list and send email accordingly
* [-] create send result-list if possible
* [X] things I'm not done
  * [X] error messages
  * [X] input validation
  * [X] more test cases
  * [-] CC/BCC minimized but expand when clicked

## TODO

* sent mail list & resend & forward to new recipients : DB persistence
* webhooks api : to have accurate report on actual delivery and bounce analysis
* periodic email service health check could help provide more responsive service.
* Dockerize for easy deploy

## Limitations

* MailGun only lets free users send mails to 5 registered & verified email address for test purpose. [Mailgun Doc](https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain). Thus, Unable to test multiple users other than registered.
