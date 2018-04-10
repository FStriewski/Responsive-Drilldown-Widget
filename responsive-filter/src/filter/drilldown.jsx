import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

export default class Drilldown extends PureComponent {



    render(){
        return (
                <ul class="vertical menu drilldown" data-drilldown>
                    <li><a href="#">One</a></li>
                    <li>
                        <a href="#">Two</a>
                        <ul class="menu vertical nested">
                            <li><a href="#">Two A</a></li>
                            <li><a href="#">Two B</a></li>
                            <li><a href="#">Two C</a></li>
                            <li><a href="#">Two D</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Three</a></li>
                    <li><a href="#">Four</a></li>
                </ul>   
            )
        }
}