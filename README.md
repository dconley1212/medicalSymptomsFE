# medicalSymptomsFE

Description: developing my programming skills by creating a project in collaboration with Doctors, who feel certain processes could be streamlined.

Programming Languages: Javasript, Typescript
Libraries/Frameworks: React, React Router, Styling Components, Redux, Axios, JWT-Decode, React Testing Library, Jest 

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

3. Added the Stripe npm module to create a payment component and used axios to make a http request to my backend server in order to send another request to the stripe api to process the payment securely.

4. Axios was used in multiple areas of the application to send http requests to the backend for registering a user, logging in a user, a user submitting reviews/viewing reviews, and for submitting payment at checkout.


