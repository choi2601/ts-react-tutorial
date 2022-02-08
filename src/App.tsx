import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

interface form {
  name: string;
  description: string;
}

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  }
  const onSubmit = (form: form) => {};

  return (
    <>
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
    <Counter />
    <ReducerSample />
    <MyForm onSubmit={onSubmit}/>
    <Greetings onClick={onClick} name="리액트"/>
    </>
    
  )
}

export default App;
