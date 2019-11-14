import React from 'react';
import './App.css';

import Headers from './components/others/Headers';
import Menu from './components/others/Menu';
import Notes from './components/others/Notes';
import Footers from './components/others/Footers';

import Lesson1 from './components/lessons/Lesson1';

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
                            <Lesson1/>
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
