
import './App.css';
import Axios from './Hooks/Axios';
import Classcounter from './Hooks/Classcounter';
import Counter1 from './Hooks/Counter1';
import Counter2 from './Hooks/Counter2';
import UseEffect from './Hooks/UseEffect';
import UseState from './Hooks/UseState';
import Title1 from './custom-hooks/Title1';
import Title2 from './custom-hooks/Title2';
import Classcomponent from './views/Classcomponent';
import Event from './views/Event';
import Form1 from './views/Forms';
import Functional from './views/Functional';
import Lifecycle from './views/Lifecycle';
import Parent from './views/Parent';
import ParenFn from './views/ParentFn';
import State from './views/State';
import TextState from './views/TextState';

function App() {
  return (
    <div className="App">
      <Title1/>
      <Title2/>
    </div>
  );
}

export default App;
