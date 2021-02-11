import React from "react";
import Contact from "./components/contact/Contact";
import ContactList from "./components/contactList/ContactList";
import { BrowserRouter , Route } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {

  const contacts = useSelector((state) => state.contacts)
  

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <ContactList pageName="Contact List" />
        </Route>
        
        <Route path="/contact">
          <Contact pageName="Conatact" />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
