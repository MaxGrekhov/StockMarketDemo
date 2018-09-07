import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AsyncComponent from 'components/shared/AsyncComponent';
import AppHeader from './AppHeader';

const HomePageAsync = AsyncComponent(() => (import('components/home/Home')));

import DashboardPage from 'components/dashboard/Dashboard';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <Switch>
                    <Route exact path='/dashboard' component={DashboardPage} />
                    <Route exact path='/' component={HomePageAsync} />
                </Switch>
            </div>
        );
    }
}