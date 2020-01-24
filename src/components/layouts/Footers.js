import React from "react";

export default function Footers() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div className="ga">
                        <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-4789820854456926"
                             data-ad-slot={6515249890} data-ad-format="rectangle,horizontal"/>
                    </div>
                </div>
            </div>
            {/* CR */}
            <div className="copyright container">
                <div className="fb-like" data-href="http://regexone.com" data-layout="button_count" data-action="like"
                     data-show-faces="true" data-share="true"/>
                <div className="twitter-like" style={{display: 'inline', position: 'relative', top: 7}}>
                    <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://regexone.com"
                       data-text="RegexOne - Learn Regular Expressions with simple, interactive exercises."
                       data-via="RegexOne"/>
                </div>
                <div className="text">2019 © RegexOne<br/>
                    <a href="mailto:regexone@gmail.com" title="RegexOne Email">Email</a> |
                    <a href="http://twitter.com/regexone" title="RegexOne Twitter">Twitter</a>
                </div>
                <div className="text">Additional Courses<br/>
                    <a href="https://sqlbolt.com" title="SQLBolt">Interactive SQL Lessons</a>
                </div>
            </div>
        </div>
    );
}