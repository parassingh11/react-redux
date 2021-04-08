import React from "react";

import SearchPage from './components/SearchPage';
import List from  './components/Lists';
import Form from './components/Form';


function App(props) { 
  return (
    <div className="App">
      <List />
      <div>
      <h2>Add a new article here</h2>
      <Form />
    </div>
    </div>
  );
}

export default App;

