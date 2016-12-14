// Setup navbar after page load complete
$( document ).ready(function() {
  // log completed page load, then prep side nav
  console.log( "page load complete" )
  $(".button-collapse").sideNav({
    closeOnClick: true
  })
})

$('#activator').click(toggleBodyScroll())
$('#deactivator').click(toggleBodyScroll())

function toggleBodyScroll () {
  $('body').toggleClass("noscroll")
}


function sanitizeString (string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function changePage (page) {
  if (page === document.getElementById('mainIframe').src) { // if page we are changing to is the same as the current page, do not change
    return
  } else {
    document.getElementById('mainIframe').src = page
  }
}

function addAnnouncement (announcement) {
    $('#announcementsList').append('<li><div class="row"><div class="col s12 m5"><div class="card-panel white"><span class="black-text">' + announcement + '</span></div></div></div></li>')
}

function addNews (image, title, news) {
  var articleTemplate = '<li><div class="card small"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="newsArticleImage"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">newsArticleTitle<i class="material-icons right">more_vert</i></span></div><div class="card-reveal reveal-fullscreen"><span class="card-title grey-text text-darken-4">newsArticleTitle<i class="material-icons deactivator right">close</i></span>newsArticleContent</div></div></li>'
  var articleEdited = articleTemplate.replace('newsArticleImage', sanitizeString(image)).replace('newsArticleTitle', title).replace('newsArticleContent', sanitizeString(news))

  $('#newsList').append(articleEdited)
}

var testAnnouncementJSON = `{
  "Announcements": [
    "Programming club will be serving donuts for anyone who can write hello world in any language of choice",
    "Smug Anime Faces on the rise",
    "rare pepe memes decreasing in value SELL SELL SELL"
  ]
}`

var testNewsJSON = `{
  "Articles": [
    {
      "image": "http://i.imgur.com/IWQZaHD.gif",
      "title": "Programming club meetings",
      "body": "The programming club will be holding meetings on Thursdays after school"
    },
    {
      "image": "http://i.imgur.com/nZneq9B.png",
      "title": "log horizon still best show, like, ever",
      "body": "log horizon remains #1 show hands down 2k16"
    },
    {
      "image": "http://i.imgur.com/nZneq9B.png",
      "title": "log horizon still best show, like, ever",
      "body": "log horizon remains #1 show hands down 2k16"
    },
    {
      "image": "http://i.imgur.com/nZneq9B.png",
      "title": "log horizon still best show, like, ever",
      "body": "log horizon remains #1 show hands down 2k16"
    }
  ]
}`

function addAnnouncementsFromJSON (json) {
  var JSONBuffer = JSON.parse(json)
  for (var i = 0; i < JSONBuffer.Announcements.length; i++) {
    addAnnouncement(JSONBuffer.Announcements[i]);
  }
}

function addNewsFromJSON (json) {
  var JSONBuffer = JSON.parse(json)
  for (var i = 0; i < JSONBuffer.Articles.length; i++) {
    addNews(JSONBuffer.Articles[i].image, JSONBuffer.Articles[i].title, JSONBuffer.Articles[i].body);
  }
}
