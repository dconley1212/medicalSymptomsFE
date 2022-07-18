# medicalSymptomsFE

Description: developing my programming skills by creating a project in collaboration with Doctors, who feel certain processes could be streamlined.

FYI: I just started this project on June 14th, 2022. If you're looking for more details on other work I have done. I would navigate to my build-week-scaffolding-project, where I built an app that allows you to create a user account, and add plant cards to track all the plants you have and when to water them. I built both the client-side and backend api in one folder so you can navigate to both ends in one main folder. I understand on large scale applications you would never do that, but since it was such small application I decided to go that route.

Design: I studied a lot of different sites on a figma community page for medical device sites or medical practice sites. I decided on Medic because it incoporated professional design, and it outlined some designs for a few features I wanted to practice like product reviews.

Building Decisions:
I decided to create a React app with Typescript because I have heard so many good things about Typescript and wanted to learn a new skill that would help me on the job.

Another decision I made recently was to use Redux in my project over context API. I learned both frameworks in school, and originally thought that context API was the framework I would choose for this project. After I realized a couple of features I wanted to do might require a better method of handling state on a global level, I decided to do this project with redux as my framework to help me with state management. It became increasingly clear that I should use redux because I wanted to pass information from components that might not have a parent, child, grandchild, etc relationship. I wanted the flexibility that redux provides with a global store of state that my components could connect to and get the necessary information to display on the web page.

Decisions for week 06/27/22 - 07/01/22
Ideas:

- color scheme
- Login and Register Design
- Typescript challenge with handleChange function
- Learning the changes with Redux-Toolkit and the challenges I am running into

This week started with a lot of decisions based on the look and feel of my medical ecommerce site. I studied designs of other medical device sites and designs of local tech companies here in Utah. One of the key things I learned was how to make a login or register web page more proffessional and how to keep it simple, but eye catching.

Additionally, I have been learning the in's and out's of typescript as I build this project. A challenge I ran into this week with typescript was setting the state when the state was an object with mulitple properties. I tried a couple of different things based on the typescript fundamentals I know for objects, but none of it was working correctly. Luckily, I was able to find a great example on stackoverflow that helped me learn how to appropriately define what the useState hook would be receiving.

At the end of this week, I decided to update my redux knowledge and start learning redux toolkit. I read online that it would make my overall application more light weight since it uses less dependencies, and that it was an easier overall set up in the long run. It has been really interesting learning how to set up the store this week and realize that the file structure they recommend is completely different to how I learned how to do it in the past. So that will be the prolem to solve for next week. I will have to decide how I want to create my folder structure for my features, slices of state, components, etc.

Week of July 4th-8th:
It was a holiday week and we are going on vacation on the 8th with Amy's family, but I still made a lot of good progress on the app. I was able to update the initial state object for the slicer so it accurately represented the state I was going to be managing.

Additionally, I started the process of implementing the event handler for when a "potential
customer" clicked the add to cart button. I learned how to import the action creators to be dispatched to the reducers in the slice file for the feature. Additionally, I was running into a problem that I created myself, where I thought I needed to click the button twice to add a product to the cartItems state. I knew this functionality wasn't right and I tried to move the event handler into the Product component with the thinking that it wasn't registering on the first click with the button under the product that was clicked. I soon realized that this was dumb because I had the same functionality before when I was returning the button in the products.map function anyways. I came to realize the problem I thought I was experiencing had to do with where I was calling my console.log function. It was in the event handler right after the dispatch of the action creator. So I tested this hypothesis by creating a useEffect hook to log the cartProducts state everytime it changed and sure enough I saw that my app actually was working correctly on the first click.

Week of July 11th - July 15th

Decisions:

- Updating the intitial State to reflect more accurately the state needed for checkout
- Updated the ProductToCheckoutSlice to accomodate the changes to initital state and how the users actions would affect updating the state.
- Created a New Header Component to include in every component that I feel like it is needed.
- Gave the products and product component a css overhaul where I decided on the design of all the parent children jsx relationships on the web page and how it would be displayed to the user.
- Touched up the web page to make the ui more appealing to the user.

The week really started on the 13th for me because that is when we got back from vacation. I didn't run into as many problems this week because a lot of it was sharpening my new typscript and redux tool kit skills; and sharpening my css and flexbox skills to create the layout I wanted for the page. One of the things I find very exciting is I am starting to use Javascript in the JSX more than I ever have to make the webpage more dynamic and user friendly. I feel like this is a major part of my development and huge hurdle as I contiune to grow in my coding capability!
