/**
 * This is a Br Element Component
 * 
 * Kreatx 2018
 */

import { Component } from "/flowerui/components/base/Component.js";
import { ObjectUtils } from "/flowerui/lib/ObjectUtils.js";
import { DependencyContainer } from "/flowerui/lib/DependencyContainer.js";
var Br = function(_props)
{
    this.template = function () 
    {        
        return  '<br/>';    
    };

    var _defaultParams = {
    };
    ObjectUtils.fromDefault(_defaultParams, _props);
    //_props = ObjectUtils.extend(false, false, _defaultParams, _props);
    Component.call(this, _props);
};
Br.prototype.ctor = 'Br';
DependencyContainer.getInstance().register("Br", Br, DependencyContainer.simpleResolve);
export {
    Br
};