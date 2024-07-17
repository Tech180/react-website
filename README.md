# Riley's Website

react-website

## Description

This project was intended to explore the ins and outs of React. Much of the work involved understanding how React functions and learning a new and unique language. This website provides information about me and elaborates on who I am as a person.

## Demo
![20240516213203_1](https://github.com/Tech180/react-website/assets/19378220/08f0d9d0-d24c-4b98-bb97-6df4d122048b)

![20240516213212_1](https://github.com/Tech180/react-website/assets/19378220/642e2c98-e81f-4117-8391-6c14e31eeb4b)

## Features

- Dark mode
- Email sending
- Mobile view
- Resume and info about me
- Utilization of multiple REST API's

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tech180/react-website.git
   ```
2. Install the dependencies
   ```bash
   npm install
   ```
3. Run the website!
   ```bash
   npm run dev
   ```

   
Or check it out here!
- https://riley.lawsonserver.org
   
## Components Missing?
- Unfortunately you'll be missing the authorization of IGDB, however you can easily input a headers file like such with your authorization details (put the headers.json in the public folder ;) ). To aquire the Client-ID and Authorization follow the IGDB link on the website and it'll direct you to their API documentation with all of the necessary details.
   ```json
   {
       "Accept": "application/json",
       "Client-ID": "",
       "Authorization": "",
       "Content-Type": "application/json"
   }
   ```
