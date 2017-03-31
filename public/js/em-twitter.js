//needs div with id "tweet"
////receives hashtag to tweet to
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/request/script", "dojo/dom"], function(declare, domConstruct, script, dom) {
    return declare(null, {
        constructor: function(hashtag) {
            //twitter takes hashtag and returns tweet button
            script.get('//platform.twitter.com/widgets.js');
            domConstruct.create("div", {
                innerHTML: '<a href="https://twitter.com/intent/tweet?button_hashtag=' + hashtag + '" class="twitter-hashtag-button" data-show-count="false">Tweet #' + hashtag + '</a>'
            }, dom.byId("tweet"));
        }
    });
});
