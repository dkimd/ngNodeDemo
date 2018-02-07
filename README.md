# Email Send Service using Angular / Node Express

<!-- TOC -->

* [Preview](#preview)
* [Running The Service](#running-the-service)
  * [Development Mode](#development-mode)
  * [Production Mode](#production-mode)
* [Features](#features)
* [Framework/Components/Libraries used](#frameworkcomponentslibraries-used)
* [TODO](#todo)
* [Limitations](#limitations)
* [dependencies](#dependencies)
* [change log](#change-log)
  * [V 0.3.0](#v-030)
  * [V 0.2.0](#v-020)

<!-- /TOC -->

## Preview

Working Demo can be seen here. [click](http://52.65.146.59/)

## Running The Service

### Development Mode

* frontend is located under folder `front`, execute following commands.

```bash
> npm install
> ng serve
```

* backend is located under folder `back`, execute following commands.

```bash
> npm install
> npm start
```

or if you have installed `nodemon`, instead of running `npm start`

```bash
> nodemon --exec 'npm start'
```

for testing

```bash
> npm test
```

### Production Mode

* Build the angular frontend

```bash
> ng build --prod
```

after the build `dist` folder is created. you can upload filles under this folder to serve on the web server.

* Node/Express backend

```bash
> npm run start-prod
```

or if you've installed pm2

```bas
> pm2 start npm -- run start-prod --
```

## Features

* sends email on the app.
* Single Page App using Angular
* PC / Mobile friendly Responsive design using google material.
* sendGrid and Mailgun for mail sending. Failover when one service returns error

## Framework/Components/Libraries used

* Angular 5.2.0
* Material2 5.2.0
* Express 4.15.5

## TODO

* sent mail list & resend & forward to new recipients : DB persistence
* webhooks api : to have accurate report on actual delivery and bounce analysis
* periodic email service health check could help provide more responsive service.
* Dockerize for easy deploy

## Limitations

* MailGun only lets free users send mails to 5 registered & verified email address for test purpose. [Mailgun Doc](https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain). Thus, Unable to test multiple users other than registered.

## dependencies

* Node : v9.2.1
* angular-cli : 1.6.6

## change log

### V 0.3.0

* frontend

  * notify toast added
  * responsive css
  * input validation / error messages / multiple email
  * email subject / contents compulsory
  * user confirm when page leave

* Backend
  * API : send email POST
  * failover to next service.
  * test cases added
  * separate config function for each mail service

### V 0.2.0

* Front Page fininshed
  * email form
  * about page for routing demo purpose
  * angular material/css applied
