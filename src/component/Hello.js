export default function Hello() {

    function showName() {
        console.log("Jinny");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText1(e) {
        console.log(e.target.value)
    }

    function showText2(txt) {
        console.log(txt)
    }

    return (
        <>
            <h1>Hello</h1>
            <button onClick={showName}>show name</button>

            <button onClick={
                () => {
                    console.log(20);
                }
            }>show age1</button>
            
            <button onClick={
                () => {
                    showAge(10);
                }
            }>show age2</button>

            <br/>
            <input type="text" onChange={showText1}/>
            <br/>
            <input type="text" onChange={ e => {
                const txt = e.target.value;
                showText2(txt);
            }}/>
        </>
    );
}
