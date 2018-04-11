import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';

import {vegetables, fruits, beans} from '../productCodes'

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

export default class Drilldown extends PureComponent {



    render(){
        return (

            <div>
                <ul class="vertical menu drilldown" data-drilldown>
                    <li>
                        <a href="#"> Vegetables   </a>
                        <ul class="menu vertical nested">
                            { vegetables.map(  veg => 
                                        <li>
                                            <a href="#">
                                                {Object.getOwnPropertyNames(veg)}
                                            </a>
                                        </li>
                            
                            )}
                        </ul>
                    </li>
                    <li>
                        <a href="#"> Fruits & Nuts   </a>
                        <ul class="menu vertical nested">
                            {fruits.map(fruit =>
                                <li>
                                    <a href="#">
                                        {Object.getOwnPropertyNames(fruit)}
                                    </a>
                                </li>

                            )}
                        </ul>
                    </li>
                    <li>
                        <a href="#"> Beans & Crop   </a>
                        <ul class="menu vertical nested">
                            {beans.map(bean =>
                                <li>
                                    <a href="#">
                                        {Object.getOwnPropertyNames(bean)}
                                    </a>
                                </li>

                            )}
                        </ul>
                    </li>



                </ul>
            </div>

        )
    }
    }
