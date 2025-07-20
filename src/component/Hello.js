import { useState } from "react";

export default function Hello(props) {
    console.log(props);
    const [name, setName] = useState('Jinny');
    const [age, setAge] = useState(props.age)

    return (
        <>
            <h2 id="name">{name} ({age}살)</h2>            
            <button onClick={ () => {
                setName(name === "Jinny" ? "Jin" : "Jinny")
                setAge(age+1)
            }} >Change</button>
        </>
    );
}
