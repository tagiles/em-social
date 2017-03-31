// needs a div with id "fb-root"
// receives facebook page url
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/request/script", "dojo/dom"], function(declare, domConstruct, script, dom) {
    return declare(null, {
        constructor: function(url) {
            script.get('//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8');
            domConstruct.create("div", {
                className: 'fb-like',
                "data-href": url,
                "data-layout": "standard",
                "data-action": "like",
                "data-size": "small",
                "data-show-faces": "true",
                "data-share": "true"
            }, dom.byId("fb-root"));
        }
    });
});
