import {useState} from "react";
function App(){
    const [name, setName] = useState("Krishna");
    return (
        <>
        <input
         type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
           />
        <button onClick={() => alert(name)}>Greet</button>
        </>
    );
}

export default App;