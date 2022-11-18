# medicalSymptomsFE

Description: Developing my programming skills by creating a project in collaboration with Doctors, who feel certain products could provide relief to back pain.

Programming Languages: Javasript, Typescript
Libraries/Frameworks: React, React Router, Styling Components, Redux, Axios, JWT-Decode, React Testing Library, Jest, HTML, CSS

General Navigation: 

client folder => src folder => Contains all the folders mentioned below.

Assets => Has images used in project.

Components => files that include basic routing of the app like Header, LandingPage, Login, PrivateRoute, Register, and share a common characteristic of
not having a redux reducer/slicer to share state to the redux store.

_test_ => Testing files for each file in the app.

app => Files for creating the redux store and hooks.

data => Folder for holding the product data.

features => A folder that has additional folders containing different features of the app like Checkout/Products, Questionaire/Survey, Reviews, and UserAccount.

utilities => Holds files for creating the currency format and for setting the JWT token.

High level Highlights:

1. Choosing to use Redux through out my application to pass state/user data to different components that didn't have a parent child relationship in the DOM. You can view my Redux Slicer files in any of the folders contained inside the features folder.

2. Applied React and React Router hooks, like useState, useEffect, useNavigation, etc, where necessary to help manage the state of a component and when specific information should render in the app.

3. Added the Stripe npm module to help create a payment component and used axios to make a http request to my backend server, which then sends another request to the stripe api to process the payment securely.

4. Axios was used in multiple areas of the application to send http requests to the backend for registering a user, logging in a user, a user submitting reviews/viewing reviews, and for submitting payment at checkout.

5. The user can upload an insurance card file to their account. The idea is that they can get a rebate from their insurance for the medical device purchase. An http request is sent with the insurance card file to the backend and the backend will processes the file and send it to an Amazon S3 bucket.

6. Applied JSON WEB Token technology for authenticating a user and authorizing a user to be able to access certain routes within the app.

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=dconley1212)](https://github.com/dconley1212/github-readme-stats)

