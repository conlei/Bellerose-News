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


function isDangerous (string) {
  if (string.includes('<script>')) {
    return true
  } else {
    return false
  }
}

function changePage (page) {
  if (page === document.getElementById('mainIframe').src) { // if page we are changing to is the same as the current page, do not change
    return
  } else {
    document.getElementById('mainIframe').src = page
  }
}

function addAnnouncement (announcement) {
  if (isDangerous(announcement)) {
    return
  } else {
    $('#announcementsList').append('<li><div class="row"><div class="col s12 m5"><div class="card-panel white"><span class="black-text">' + announcement + '</span></div></div></div></li>')
  }
}

function addNews (image, title, news) {
  var articleTemplate = '<li><div class="card small"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="newsArticleImage"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">newsArticleTitle<i class="material-icons right">more_vert</i></span></div><div class="card-reveal reveal-fullscreen"><span class="card-title grey-text text-darken-4">newsArticleTitle<i class="material-icons deactivator right">close</i></span>newsArticleContent</div></div></li>'
  var articleEdited = articleTemplate.replace('newsArticleImage', image).replace('newsArticleTitle', title).replace('newsArticleContent', news)

  if (isDangerous(articleEdited)) {
    return
  } else {
    $('#newsList').append(articleEdited)
  }
}

var testJSON = `{
	"Announcements": [["EXAMPLE TEXT", "END DATE"],
	["Programming club will be serving donuts for anyone who can write hello world in any language of choice", "11/07/16"]]
}`;

function addAnnouncementsFromJSON (json) {
  var JSONBuffer = JSON.parse(json);
  for (var i = 0; i < JSONBuffer.Announcements.length; i++) {
    addAnnouncement(JSONBuffer.Announcements[i][0]);
  }
}
