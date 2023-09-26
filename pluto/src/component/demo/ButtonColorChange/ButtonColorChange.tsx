import {useState} from "react";

export default function ButtonColorChange() {
    const [color, setColor] = useState<string>('blue');

    // class Person {
    //     name: string
    //     age: number
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     getName() {
    //         return this.name;
    //     }
    // }

    const handleChangeColor = (): void => {
        // console.log(typeof Person)
        setColor(color === 'blue' ? 'red' : 'blue');
    }

    return (
        <div>
            <h1 style={{color: color}}>这段文字颜色可以改变</h1>
            <button onClick={handleChangeColor}>改变文字颜色</button>
        </div>
    )
}