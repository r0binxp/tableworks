import React from 'react';
import '../../index.css'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/actions'

const Header = () => { 
    const dispatch = useDispatch();
    
    const logOut = () => {
        dispatch(actions.logOut())
        window.sessionStorage.setItem('logged', 'false')
        window.location.reload(true);

    }
    return (
        <div className="container-fluid">
            <div className="row bg-white header align-items-center">
                <div className="col-4 ps-5">
                    <img className="logo-header" width="120" src="Logo-horizontal.png" alt="Logo Wispro" />
                </div>
                <div className="col-8">
                    <div className="row justify-content-end pe-5 pt-2 align-items-center">
                        <Button className="topNavigationButton mb-0" variant="outlined" onClick={() => logOut()}>Log out</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;