# Description

This repository is used as teaching purpose on Udemy

# Installation, up and running

Launch the Terminal app and use bellow command to install, up and running

## Clone repository

Run bellow command to clone this repository <br />
`git clone git@github.com:jahidhiron/node-blog-api.git .`

## Server installation, up and running

You may use npm or yarn. Like `yarn` and `yarn start` <br />

`npm install` <br />
`npm start` <br />
<br />
<br />

# Documentation

Here I have discussed about which technology I have used, and why used. <br />

## Server side technology

### Framework/Library and modules

1. I have used `node.js` runtime environment for server side
2. `Express.js` web framework
3. To validate request, I have used `express-validator`

## Decision

1. `Why nodejs/Express?: ` Node. js uses non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.
2. I have used pagination instead of loading all data at a time. Initially, it loads 10 items
3. Authentication, authorization, user verify, recover password are added to this app
