# Wall of Kindness - Reduce Waste and Give Back

## Problem to Solve/Purpose

This app aims to reduce organic and textile waste while providing food and garments to those in need.

## Solution

The core of this app is its community-driven functionality to gift basic necessities, primarily clothing and food items.  Individuals/businesses can register for an account to become donors.  They are then allowed to advertise  food/clothing items that they no longer need.  These donations are searchable by the public, so individuals/businesses who are in need of these food/clothing items can contact the donors to receive the items.  Therefore, donors and users can reduce their total organic and textile wastage while feeding/clothing those in need. 

## Main Functionalities

* Donors advertise unneeded food and clothing items (reduce organic and textile waste while helping others in need)
* Users can publicly search for food and garments that they need and then contact donors via email to coordinate the exchange
* Search results show distances between the donations and the recipients (based on the recipient's current location).  These distances are calculated in metres and kilometres, so they are accessible for both recipients who can only walk to destinations and recipients who can drive/commute.

## Security

* Donors must sign up for an account 
* Passwords are encrypted in the database 
* Session tokens are provided upon a successful login 
* Sessions last 300s (roughly 5 minutes) for testing purposes
* Session tokens are validated upon every API call for the donors (if the token has expired, the user must login again to proceed)
* User profiles and donations/gifts are account-based, so a donor cannot view the details of other donors
* Emails of the donors are not rendered in the view for the public when making a request to contact a donor to receive donations  

## Technologies/Tools

React.js, MongoDB, Node.js, Express.js, CSS, JWT, Bcrypt, other node packages, YARN

## Installation/Using the Deployed App 

* Git clone the repo
* In the command line, run **yarn install** at the root and in the client folder
* Cd back to the root after installing all the node modules and run **yarn start**
* Deployment on Heroku: 

## Creators

This app was created by:

* [azukimochi](https://github.com/azukimochi)
* [aboozarmodeh](https://github.com/aboozarmojdeh)
* [Apbh](https://github.com/Apbh)


