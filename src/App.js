import React from 'react';

// this below imports all the components from the "boxgen.js" file
// import Boxgenerator from './Components/boxgen';

// this below imports all the components from the "tabs.js" file
// import TabInfo from './Components/tabs';

// this below imports all the components from the "toDolist.js" file
import List from './Components/toDolist';

import './App.css';
// after typing "npm i bootstrap" to install bootstarp to our project in the same folder as the node_modules, we import here with this code below
import 'bootstrap/dist/css/bootstrap.min.css';


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
function App() {
  return (
    <>
        <List/>                            
    </>
  );
}

export default App;

