import React from "react";
import {    
    Link
} from "react-router-dom";

export default function Headers() {
    return (
        <div>
            <div className="header">
                <Link to="/" className="site_logo" title="Home">
                    <img src="/cs/images/favicon.png" alt="RegexOne icon"/>                
                </Link>
                
                <Link to="/" className="site_name" title="Home">
                    <span>Regex<span className="highlight">One</span></span><br/>
                    <span
                    className="desc hide-max-md">Learn Regular Expressions with simple, interactive exercises.</span>
                
                </Link>
            
                <div className="menu_buttons">
                    <a href="/lesson/introduction_abcs" className="menu_button lesson_button" title="Lessons menu">
                        <img src="/cs/images/icon_tutorial.png" alt="Interactive Tutorial"/> <span
                        className="hide-max-sm">Interactive</span> <span className="hide-max-xs">Tutorial</span>
                    </a>
                    <a href="/problem/matching_decimal_numbers" className="menu_button more_button"
                       title="References & More menu">
                        <img src="/cs/images/icon_reference.png" alt="References & More"/> <span
                        className="hide-max-xs">References</span> <span className="hide-max-sm">&amp; More</span>
                    </a>
                </div>
            </div>

        </div>
    );
}