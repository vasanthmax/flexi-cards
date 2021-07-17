import UserArea from './pages/userArea';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FlipCardGet from './pages/FlipCardPage';
import PricingCardGet from './pages/PricingCardPage';
import NormalCardGet from './pages/NormalCard';
import Dashboard from './pages/dashboard';
import UserAreaUpdate from './pages/userareaupdate';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/userarea' component={UserArea} exact />
          <Route path='/flip' component={FlipCardGet} />
          <Route path='/pricing' component={PricingCardGet} />
          <Route path='/normal' component={NormalCardGet} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/update/:id' component={UserAreaUpdate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
