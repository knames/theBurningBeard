
var userFeed = new Instafeed({
get: 'user',
userId: '1476421709',
accessToken: ''
});
userFeed.run();    

// grab out load more button
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  // every time we load more, run this function
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }
  },
});

// bind the load more button
loadButton.addEventListener('click', function() {
  userFeed.next();
});

// run our feed!
userFeed.run();