import { Switch, Route } from 'react-router-dom';
import Store from './pages/Store/Store';

export default function Content() {
  return (
    <Switch>
      <Route path="/" component={Store} />
    </Switch>
  );
}
