import UserArea from './pages/userArea';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FlipCardGet from './pages/FlipCardPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/userarea' component={UserArea} exact />
          <Route path='/flip' component={FlipCardGet} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
