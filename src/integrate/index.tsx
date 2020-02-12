import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Domain1 from '../domain1/route';

class App extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <Router>
                {/* Temp navigation */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">/</Link>
                        </li>
                        <li>
                            <Link to="/about">/about</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    {Domain1.map(route => (
                        <Route path={route.path} key={route.path}>
                            {route.children}
                        </Route>
                    ))}
                    <Route path="/">
                        <div>root</div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));
