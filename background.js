      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { schemes:['http','https']}
        })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
      chrome.browserAction.onClicked.addListener(function(tab) {
      	chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
          console.log('auth token:', token);

        	chrome.identity.getProfileUserInfo(function(userInfo) {
        		var msg = {from: 'event-script', data: userInfo};
      			console.log('should be sending', msg, 'to the tab:', tab);

      			chrome.tabs.sendMessage(tab.id, msg, function(response) {
      				console.log(response);
      			});
        	});
      	});
      });
