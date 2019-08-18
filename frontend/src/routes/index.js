import React, { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";
import Cookies from 'universal-cookie';
import LoadingSpinner from '../commonComponents/LoadingSpinner.react';

const cookies = new Cookies();
const CoreLayout = lazy(() => import('../layouts/coreLayout'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const LoginView = lazy(() => import('../accountViews/LoginView.react'));
const UserProfile = lazy(() => import('../containers/user-profile/UserProfile.react'));
const AssetManagement = lazy(() => import('../containers/assetManagement/AssetManagement.react'));

const loggedIn = function () {
    if (cookies.get('access_Token')) {
        return true;
    } else return false;
}

export default (
    <Suspense fallback={<LoadingSpinner />}>
        <Route name="login-view" exact path="/" component={LoginView} />
        <Route component={CoreLayout}>
            <Route name="user-profie" exact path="/user-profile" render={() => loggedIn()
                ? <DashboardLayout><UserProfile /></DashboardLayout> : <LoginView />} />
            <Route name="asset-management" exact path="/asset-management" render={() => loggedIn()
                ? <DashboardLayout><AssetManagement /></DashboardLayout> : <LoginView />} />
        </Route>
    </Suspense>
);