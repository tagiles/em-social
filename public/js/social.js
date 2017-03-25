define(["dojo/_base/declare", "dojo/dom-construct", "dojo/request/script", "dojo/dom"], function(declare, domConstruct, script, dom) {
    return declare(null, {
        constructor: function(hashtag, url) {

            //twitter takes hashtag and returns tweet button
            script.get('//platform.twitter.com/widgets.js');
            domConstruct.create("div", {
                innerHTML: '<a href="https://twitter.com/intent/tweet?button_hashtag=' + hashtag + '" class="twitter-hashtag-button" data-show-count="false">Tweet #' + hashtag + '</a>'
            }, dom.byId("tweet"));

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
