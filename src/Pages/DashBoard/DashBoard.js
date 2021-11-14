import React from 'react';
import { NavLink } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import AddService from './AddService/AddService.js';
import ManageService from './ManageService/ManageService.js';
import './DashBoard.css'
import MakeAdmin from './MakeAdmin/MakeAdmin.js';
import MyOrder from '../MyOrder/MyOrder.js';
import Pay from './Pay/Pay.js';
import useAuth from '../hooks/useAuth.js';
import AddReview from './AddReview/AddReview.js';
import ManageProduct from './ManageProduct/ManageProduct.js';
import AdminRoute from '../Login/AdminRoute/AdminRoute.js';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    
    return (
        <div>
            <div className="row gx-1 container-fluid">
                <div className="col-12 col-sm-12 col-md-3  py-5 px-4 dashbord">
                   {!admin && <> <Link className="nested" to={`${url}`}>DashBoard</Link>
                    <br />
                    <Link className="nested" to={`${url}/pay`}>Pay Now</Link>
                    <br />
                    <Link className="nested" to={`${url}/myorder`}>My Order</Link>
                    <br />
                    <Link to={`${url}/review`} className="nested">Add Review</Link>
                    <br /> </> }

                    
                    {admin && <> <Link to={`${url}/manageallorder`} className="nested">Manage All Orders</Link>
                    <br />
                    <Link to={`${url}/addservice`} className="nested">Add A Product</Link>
                    <br />
                    <Link to={`${url}/makeadmin`} className="nested">Make Admin</Link>
                    <br />
                    <Link to={`${url}/manageproduct`} className="nested">Manage Products</Link>
                    <br /> </>}

                    {user?.email ? <NavLink
                    onClick={logOut} className="logoutBtn" to="/login">Log out</NavLink> : <> </>
                            } 
                </div>

                <div className="col-12 col-md-9">
                    <Switch>
                        <Route exact path={path}>
                        </Route>
                                
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                                
                        <Route path={`${path}/myorder`}>
                            <MyOrder></MyOrder>
                        </Route>
                                
                        <Route path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                                
                        
                        <AdminRoute path={`${path}/manageallorder`}>
                            <ManageService></ManageService>
                        </AdminRoute>
        
                        <AdminRoute path={`${path}/addservice`}>
                            <AddService></AddService>
                        </AdminRoute>      
                                
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                            
                        <AdminRoute path={`${path}/manageproduct`}>
                            <ManageProduct></ManageProduct>
                        </AdminRoute>
                    </Switch>
                    
                </div>
            </div>
           
        </div>
    );
};

export default DashBoard;