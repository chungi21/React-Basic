import { useState } from "react";

export default function Hello() {

    // let name = "Jinny";
    const [name, setName] = useState('Jinny');

    function chaneName() {
        // name = name == "Jinny" ? "jin" : "Jinny";
        // document.getElementById("name").innerText = name;
        const newName = name == "Jinny" ? "jin" : "Jinny";
        setName(newName);

    }

    return (
        <>
            <h1>state</h1>
            <h2 id="name">{name}</h2>            
            <button onClick={chaneName}>Change</button>
        </>
    );
}
