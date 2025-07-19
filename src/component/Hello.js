// 방법1
// const Hello = function(){
//     return <h1>Hello</h1>
// }

import World from "./World"

// 방법2
// const Hello = () => {
//     return <h1>Hello</h1>
// }

// 방법3
// export default function Hello() {
//     return <h1>Hello</h1>
// }


export default function Hello() {
    return (
    <>
        <h1>Hello</h1>
        <World/>
    </>
    );
}