import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';

import {vegetables, fruitNuts, beansCrop} from '../productCodes'

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
                </ul>
            </div>

        )
    }
    }
//                 <ul class="vertical menu drilldown" data-drilldown>
                   
//                     <li>
//                     <a href="#"> Vegetables   </a>
//                         <ul class="menu vertical nested">



//                             <li>
//                                 <a href="#">
//                                     Soybeans
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     Beetroots
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     Onions
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                    Red cabbage
//                                 </a>
//                             </li>
//                         <li>
//                             <a href="#">
//                                 Squash
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     Corn
//                                     </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     Yucca
//                                     </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     Carrots
//                                     </a>
//                             </li>
//                         <li>
//                             <a href="#">
//                                 Potatoes
//                                     </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Zuchinni
//                                     </a>
//                         </li>
//                         </ul>
//                 </li>
       
//                 <li>
//                     <a href="#">Fruit & nuts</a>
//                     <ul class="menu vertical nested">
//                         <li>
//                             <a href="#">
//                                 Papayas
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Avocados
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Passion fruits
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Melons
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Granadillas
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Tahiti limes
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Mango
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Coconuts
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 Bananas
//                             </a>
//                         </li>
//                     </ul>
//                 </li>

                
//  // -----------------------------------------------------------------------------
//                 <li>
//                     <a href="#">Edible fruit and nuts; </a>
//                     <ul class="menu vertical nested">
//                     <li>
//                         <a href="#">
//                             Coconuts, Brazil nuts and cashew nuts, fresh or dried, whether or not shelled or peeled
//                        </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             Other nuts, fresh or dried, whether or not shelled or peeled
//                        </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             Bananas, including plantains, fresh or dried
//                        </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried
//                          </a>
//                     </li> 
//                     </ul>     
//                 </li>
//                 <li><a href="#">Coffee, tea, maté and spices</a></li>
//                 <li><a href="#">Cereals</a></li>
//                 </ul>   
//             )
//         }
// }



// ----------------------

    // <li>
    //     <a href="#">
    //         Coconuts, Brazil nuts and cashew nuts, fresh or dried, whether or not shelled or peeled
    //     </a>
    // </li>
    // <li>
    //     <a href="#">
    //        Other nuts, fresh or dried, whether or not shelled or peeled
    //     </a>
    // </li>
    // <li>
    //     <a href="#">
    //         Bananas, including plantains, fresh or dried
    //     </a>
    // </li>
    // <li>
    //     <a href="#">
    //         Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried
    //         </a>
    // </li>
    
 