import React from 'react';
import TodoList from './pages/TodoList';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <TodoList/>
    </RecoilRoot>
);
}

export default App;
