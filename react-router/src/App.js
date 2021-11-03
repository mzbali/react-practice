import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductItem from './pages/ProductItem';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductItem />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
