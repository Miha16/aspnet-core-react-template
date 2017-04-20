import * as React from "react";
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../services/Auth';
import AuthStore from '../stores/Auth';

let authService = new AuthService();

export class Header extends React.Component<any, any> {
    state = {
        redirectToSignIn: false
    }

    signOut() {
        authService.signOut();
        this.setState({ redirectToSignIn: true });
    }

    render() {
        if (this.state.redirectToSignIn) {
            return (
                <Redirect to="/" />
            );
        }

        return <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Template</a>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Landing <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 search" type="submit">Search</button>&nbsp;
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="button" onClick={() => this.signOut()}>Sign out</button>
                </form>
            </div>
        </nav>;
    }
}