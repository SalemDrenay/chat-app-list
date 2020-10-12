import React from "react";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://pbs.twimg.com/media/D_IacAkWsAA34GF?format=jpg&name=medium"
        name="Shovel Knight"
        online
      />
      <Contact
        avatar="https://pbs.twimg.com/media/D_IadiIXYAM8wbZ?format=jpg&name=medium"
        name="King Knight"
      />
      <Contact
        avatar="https://pbs.twimg.com/media/D_xuYOoX4AAqO7I?format=jpg&name=360x360"
        name="Plague Knight"
      />
      <Contact
        avatar="https://pbs.twimg.com/media/D_xuYOwXYAAlnX6?format=jpg&name=medium"
        name="Specter Knight"
        online
      />
    </div>
  );
}
*/

export default App;
