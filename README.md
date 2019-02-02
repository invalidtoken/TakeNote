# ![NoteApp](https://github.com/invalidtoken/TakeNote/blob/master/public/icons/notepad.png "App Logo")
NoteApp is a notes taking application that stores all the notes in browser's LocalStorage. The application uses responsive design philosophy to properly render the components on all sort of device widths. This App also uses Webpack to provide ES6 modules, development server, support for babel and babel polyfills. Babel is configured so that the app can be used in older or newer browsers.

## Motivation
I build this application as one of the projects in my Modern JavaScript Development Bootcamp. The main purpose of creating this application was to practice modern javascript features like ES6 modules, ES6 classes, higher-order array functions, DOM manipulation, DOM event handling, async/await, Promise API and Browser LocalStorage API. One of the most important aspects of creating this application was to use webpack and babel in the development environment and I had a lot of fun doing that. 
I learned a lot of things about the modern JavaScript development workflow while creating the app. This is the first time that I have used ES6 modules in my development and I have to say that this is a very powerful feature and I am looking forward to using it in my other projects.
The main things that I think I learned while creating the project are :
* DOM manipulation.
* Handling DOM events.
* Effectively removing old DOM events and adding new one. 
* Downloading and using **webpack** with babel and babel-polfill. 
* How to setup the **webpack.config.js** file properly
* How to configure webpack to server more then one HTML file.
* Using **ES6 module** in JavaScript Environment. 
* Reading and understanding the code that babel produces after transpiling my code was also a great experience. 
* How I can convert a code that uses class syntax into a code that uses constructor functions and vice versa. 

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your computer must have node.js and npm installed on it.
To install node.js you can look [here](https://nodejs.org/en/download/). Node.js automatically installs npm so you don't have to worry about that but you can still look [here](https://www.npmjs.com/get-npm) for more information on npm. 

### Installing

The First step is to either clone the repository or download the zip folder and extract all the files.
Navigate to the clonned or extracted folder and run the following command in the terminal in the root of the project directory.
This command will install all the dependencies that are needed to run the project.

```
npm install 
```

To run the project on your local machine just type the command written below in the root of the project directory and press enter. 

```
npm run dev-server
```

Now open you preferred browser and go to http://localhost:8080. Note that the port number can be different. To find out the port number just look at the logs in the terminal, the terminal logs has all the information about the local server. 

### Built With
* [Webpack](https://webpack.js.org/) - Webpack is used to provide various features required to run the app. 
* [Babel](https://babeljs.io/) - Babel is used to make sure that the app runs on all the browsers. 
* [UUID](https://www.npmjs.com/package/uuid) - UUID is used to generate the unique ID for each note stored. 
* [Moment.js](https://momentjs.com/) - Moment is used to provide all the time related features of the app. 

### Live Version
See the live version of the application here - [NoteApp](https://invalidtokennotesapp.netlify.com/)

### Feedback
For any feedback or suggestion on the application you can reach out to me on twitter [@invalidtoken](https://twitter.com/invalidtoken)


