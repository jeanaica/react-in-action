import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-in-action/'}>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>My Todos</h1>
              <Todo text='Learn React' />
              <Todo text='Read' />
              <Todo text='Study' />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
