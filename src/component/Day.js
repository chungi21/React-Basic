import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";

export default function Day() {

    const { day } = useParams();
    const dayNumber = parseInt(day,10);

    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data);
        });
    }, []);

    return (
        <>
            <h2>Day - {day}</h2>
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
