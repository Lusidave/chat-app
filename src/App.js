import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
     <Contact
        name="Lusidave"
        avatar="https://randomuser.me/api/portraits/men/72.jpg"
        online= {true}
     />
     <Contact 
        name="Cindy"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        online= {false}
     />
     <Contact
        name="Juliette"
        avatar="https://randomuser.me/api/portraits/women/57.jpg"
        online= {true}
     />
    </div>
  );
}

export default App;
