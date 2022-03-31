import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './TodoLists/TodoList';

function App() {
  return (
    <RecoilRoot>
        <div className="App">
            <TodoList />
        </div>
    </RecoilRoot>
  );
}

export default App;
