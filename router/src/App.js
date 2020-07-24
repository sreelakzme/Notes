import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';


const App = () => {

  const Name = () =>{
    return <h1>Name name name</h1>
  };
  return(
    <>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route path='/contact/name' component={Name} />
      <Route component={Error} />
    </Switch>

    </>
  );
};
export default App;
