let app = angular.module('viewCustom', ['libraryh3lpWidget']);

app.constant('libraryh3lpWidgetConfig', {
  url: 'https://us.libraryh3lp.com/chat/ask@chat.libraryh3lp.com?skin=1',
  prompt: 'Chat with us',
  icon: {
    set: 'communication',
    icon: 'ic_chat_24px'
  }
});
