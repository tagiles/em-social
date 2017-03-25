define(["dojo/_base/declare", "dom-construct", "dom"], function(declare, domConstruct, dom){
  return declare(null, {
    constructor: function(hastag){
      domConstruct.create("div", {
        innerHTML: '<a href="https://twitter.com/intent/tweet?button_hashtag=LoveTwitter" class="twitter-hashtag-button" data-show-count="false">Tweet #'+hashtag+'</a>'
      }, dom.byId("tweet"));
    }
  });
});
