import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SampleList from './SampleList';
import SampleCreate from './SampleCreate';
import SampleEdit from './SampleEdit';
import SampleView from './SampleView';


const Header = () => (
    <Router>
        <div>
            <Route exact path="/" component={SampleList} />
            <Route path="/create" component={SampleCreate} />
            <Route path="/todo/:id/view" component={SampleView} />
            <Route path="/todo/:id/edit" component={SampleEdit} />
            

        </div>
    </Router>
)

export default Header