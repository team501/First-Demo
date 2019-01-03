import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';

import Login from './Login';
import Landingpage from './Landingpage';
import ManageEquipment from './ManageEquipment';


const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Login}/>
<Route path="/landingpage" component={Landingpage}/>
<Route path="/manageequipment" component={ManageEquipment}/>

</Switch>
</BrowserRouter>
);
export default Routes;
