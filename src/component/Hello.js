import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <>
            <h1 style={{
                color: 'red',
                borderBottom: '3px solid blue',
                marginBottom: '40px', 
                opacity: 0.5
            }}>Hello</h1>
            <div className={styles.box}>Hello</div>
        </>
    );
}
