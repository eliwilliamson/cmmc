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

            var initElement = $(post.body)
            var instance = 1
            initElement.appendTo('#hero #hidden' + instance)

            var sliderBody = $('#hidden p:first-child').text();
            var sliderLink = $('#hidden a').attr('href');
            var sliderCTA = $('#hidden a').text();
            var sliderBG = $('#hidden img').attr('src');

            console.log(sliderCTA);

            var postSlider = $('<div class="item" style="background-image: url(' + sliderBG + ');"><div class="container"><div class="caption vertical-center text-center"><h1 class="fadeInDown-1 light-color">' + post.title + '</h1><p class="fadeInDown-2 light-color">' + sliderBody + '</p><div class="fadeInDown-3"><a href="' + sliderLink + '" class="btn btn-large">' + sliderCTA + '</a></div></div></div></div>')

            postSlider.appendTo('#hero #owl-main')

            ++instance

        })
    }
  }
});
