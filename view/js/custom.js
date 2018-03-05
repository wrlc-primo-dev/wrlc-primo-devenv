(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['libraryh3lpWidget']);

app.constant('libraryh3lpWidgetConfig', {
  url: 'https://us.libraryh3lp.com/chat/ask@chat.libraryh3lp.com?skin=1',
  prompt: 'Chat with us',
  icon: {
    set: 'communication',
    icon: 'ic_chat_24px'
  }
});

angular
// Name our module
.module('libraryh3lpWidget', [])
// Add the libraryh3lp url to trusted url sources
// so angular doesn't block it from an iframe
.filter('trustUrl', ['$sce', function ($sce) {
  return function (url) {
    if (/^http(s)?:\/\/(.+\.)?libraryh3lp\.com.+$/.test(url)) {
      return $sce.trustAsResourceUrl(url);
    }
  };
}])
// Controller for the component below
.controller('libraryh3lpWidgetController', ['libraryh3lpWidgetConfig', '$scope', function (libraryh3lpWidgetConfig, $scope) {
  var _this = this;

  this.$onInit = function () {
    $scope.config = libraryh3lpWidgetConfig;
    $scope.parentCtrl = _this.parentCtrl;
  };
  // Do facets exist?
  $scope.facetsExist = function () {
    try {
      return $scope.parentCtrl.searchService.facetService.results.length > 0;
    } catch (e) {
      return false;
    }
  };
  // Add the bottom padding class if there are facets
  $scope.bottomPadding = function () {
    if ($scope.facetsExist()) {
      return "chat-bottom-padding";
    }
  };
}]).component('prmExploreMainAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'libraryh3lpWidgetController',
  template: '\n              <button class="button chat-tab ss-chat js-toggle-chat" ng-class="bottomPadding()" ng-init="showChatWidget = false" ng-click="showChatWidget = !showChatWidget">\n                <prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{config.icon.set}}" icon-definition="{{config.icon.icon}}"></prm-icon>\n                {{config.prompt}}\n              </button>\n              <div class="chat-frame-wrap" ng-class="bottomPadding()" ng-show="showChatWidget">\n              <button class="chat-close ss-icon js-toggle-chat" title="Close chat window" ng-click="showChatWidget = !showChatWidget">&times;</button>\n                <iframe class="chat-frame" ng-src="{{config.url | trustUrl}}" frameborder="0"></iframe>\n              </div>\n              '
});
})();