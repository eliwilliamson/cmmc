$(function() {

  if ($('body').hasClass('index')) {

    function buildURL (blogname, apiKey) {
        return 'http://api.tumblr.com/v2/blog/'
            + blogname
            + '.tumblr.com/posts?api_key='
            + apiKey
            + '&callback=?'
    }

    var key = 'YyZzXfjcZm99hAMdsY4GTG3svTkEPrVpzwCaTfvUBLtTFmrSeJ'

    var url = buildURL('cincinnatiminemachineryco', key)

    $(function () {
        $.getJSON(url, function (data) {

            createPosts(data.response.posts)

        })
    })

    function createPosts (posts) {

        posts.forEach(function (post) {

            var postElement = $('<div class="item" style="background-image: url(http://eliwilliamson.github.io/cmmc/images/landing-hero-bg.jpg);"><div class="container"><div class="caption vertical-center text-center"><h1 class="fadeInDown-1 light-color">' + post.title + '</h1><p class="fadeInDown-2 light-color">' + post.body + '</p></div><!-- /.caption --></div><!-- /.container --></div><!-- /.item -->')

            postElement.appendTo('#hero owl-wrapper')

        })
    }
  }
});
