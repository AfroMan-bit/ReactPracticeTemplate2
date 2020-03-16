import React from 'react';

// this below imports all the components from the "boxgen.js" file
// import Boxgenerator from './Components/boxgen';

// this below imports all the components from the "tabs.js" file
// import TabInfo from './Components/tabs';

// this below imports all the components from the "toDolist.js" file
// import List from './Components/toDolist';

// this below imports all the components from the "pokemonAPI.js" file
// import Pokemon from './Components/pokemonAPI';


// after typing "npm install @reach/router" to install a reach router to our project in the same project directory where we have node-modules, package.json e.t.c. this helps to implement a single webpage that can link to different routes without reredndering each time we want to access another page(route) of the website. we import reach router here with this code below
import { Router } from '@reach/router';
// this below imports all the components from the routes created in the "starWars.js"
import Swapi from './Components/starWars'


// after typing "npm install @reach/router" to install a reach router to our project in the same project directory where we have node-modules, package.json e.t.c. this helps to implement a single page website that can link to different routes without reredndering each time we want to access another page(route) of the website. we import reach router here with this code below
// import { Router } from '@reach/router';
// we also need to add the route and pages here like this below
// import PageOne from './Components/PageOne';
// import PageOnedetails from './Components/PageOneId';
// import PageTwo from './Components/PageTwo';
// import PageTwodetails from './Components/PageTwoId';


import './App.css';

// after typing "npm i bootstrap" to install bootstarp to our project in the same folder as the node_modules and listed in my package.json, we can see it inside there by typing "cat package.json" after installation in the git bash terminal, we import bootstarp here with this code below
import 'bootstrap/dist/css/bootstrap.min.css';

// after typing "npm i axios" to install axios to our project, it is a library for making API calls. We import axios here ONLY IF WE ARE STATING IT IN THIS FILE with this code below
// import axios from 'axios';





// THIS CODE BELOW IS FOR "boxgen.js"
// function App() {
//   return (
//     <>
//         <Boxgenerator/>                            
//     </>
//   );
// }

// export default App;


// THIS CODE BELOW IS FOR "tabs.js"
// function App() {
//   return (
//     <>
//         <TabInfo/>                            
//     </>
//   );
// }

// export default App;


// THIS CODE BELOW IS FOR "toDolist.js"
// function App() {
//   return (
//     <>
//       <List/>
//     </>
//   );
// }

// export default App;



// THIS CODE BELOW IS FOR CALLING A POKEMON API
// function App() {

//   return (
//     <>
//       <Pokemon/>
//     </>
//   );
// }

// export default App;



// THIS CODE BELOW IS FOR CREATING A REACH ROUTER FOR A SINGLE PAGE WEBSITE 
// function App() {
//   return (
//     <>

//       {/* the "path" prop below tells the <Router> when we wish to go to the path "login* we just want to update the page so that it shows all the components of "route" within the <Router> wrapper which will look like the page is re-routing to another url which in reality it just changed what we see on the website without refreshing the page */}
//       <Router>
//         <PageOne path="/"/>
//         {/* for the ":id" in the code below means it can be anything that is passed inside the variable ":id" by the user for example the users name, users email, users address, users password and so on and will be displayed on the path ("/route-one/:id") and also be displayed on the webpage if mentioned like {props.id}. */}
//         <PageOnedetails path="/route-one/:id"/>
//         <PageTwo path="/route-two"/>
//         {/* for the ":id" in the code below means it can be anything that is passed inside the variable ":id" by the user for example the users name, users email, users address, users password and so on and will be displayed on the path ("/route-two/:id") and also be displayed on the webpage if mentioned like {props.id}. */}
//         <PageTwodetails path="/route-two/:id"/>
//       </Router>

//     </>
//   );
// }

// export default App;



// THIS CODE BELOW IS FOR CALLING A STARWARS API
function App() {
  return (
    <>
      <Swapi/>
    </>
  );
}

export default App;