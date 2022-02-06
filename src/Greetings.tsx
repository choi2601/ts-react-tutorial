import React from 'react';

type GreetingsProps = {
    name: string;
    mark?: string; // optioal
    onClick: (name: string) => void;
    // children?: React.ReactNode; arrow function에서는 기본적으로 설정(React.FC Type)되어 있지만 일반 함수에서는 별도로 설정 필요
}

const Greetings: React.FC<GreetingsProps> = ({name, mark = "!", onClick}) => {
    const handleClick = () => onClick(name);
    return (
        <div>
        <div>Hello, {name} {mark}</div>
        <button onClick={handleClick}>Click Me</button>
    </div>
    )
    
}

// function Greetings({name, mark}: GreetingsProps) {
//     return (
//     <div>{name} {mark}</div>
//     )
// }

// arrow function에서는 defaultProps로 기본값을 지정해도 실제 사용 단계에서는 undefined일 수 있기 때문에 오버로딩으로 따로 설정해줘야 됨

// Greetings.defaultProps = {
//     mark: '!',
//     array: ['a', 'b', 'c']
// }

 

export default Greetings;