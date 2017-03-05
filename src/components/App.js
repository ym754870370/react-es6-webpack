'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
                <div id="main"></div>
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

//最终渲染

