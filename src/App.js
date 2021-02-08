import "./App.css";
import React, { useState } from "react";
import Contact from "./components/contact/Conatact";
import ContactList from "./components/contactList/ContactList";
import { BrowserRouter , Route } from "react-router-dom";


function App() {

  const [contacts, setContacts] = useState([]);
  
  // TODO: Implementar ID nos contatos
  /* IDEIA 
      Fazer uns state para o path do pagina
  */

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <ContactList pageName="Contact List" contacts={contacts} setContacts={setContacts}/>
        </Route>
        
        <Route path="/contact">
          <Contact pageName="Conatact" setContacts={setContacts} contacts={contacts} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
