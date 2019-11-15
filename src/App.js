import React from 'react';
import './App.css';

import {
    Route,
    NavLink,
    Switch,
    Link
} from "react-router-dom";

import Headers from './components/layouts/Headers';
import Menu from './components/layouts/Menu';
import Notes from './components/layouts/Notes';
import Footers from './components/layouts/Footers';

import Lesson1 from './components/lessons/Lesson1';
import Lesson2 from './components/lessons/Lesson2';

export default function App() {
    return (
        <div>
            <div className="container">
                <div className="row content">
                    {/* NAV */}
                    <Headers/>
                    {/* MENU */}
                    <Menu/>
                    {/* LESSON */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9">
                            <Switch>
                                <Route exact path="/" component={Lesson1}/>

                                <Route exact path="/lesson/introduction_abcs" component={Lesson1}/>

                                <Route path="/lesson/letters_and_digits" component={Lesson2}/>
                            </Switch>
                        </div>
                        {/* NOTES */}
                        <Notes/>
                    </div>
                </div>
            </div>
            {/* GA FOOTER*/}
            <Footers/>
        </div>
    );
}
