$(function() {

  if ($('body').hasClass('index')) {

    function buildURL (blogname, apiKey) {
        return 'http://api.tumblr.com/v2/blog/'
            + blogname
            + '.tumblr.com/posts?api_key='
            + apiKey
            + '&callback=?'
    }

    var key = 'L4g3VBKroP8DvteHKmbBMbwPuBkJKBCdd8jRoVmyLBpc61Elyy'

    var url = buildURL('studio101ri', key)

    $(function () {
        $.getJSON(url, function (data) {

            createPosts(data.response.posts)

        })
    })

    function createPosts (posts) {

        posts.forEach(function (post) {

            var postElement = $('<div class="post"></div>')
            var postBody = post.body

            postElement.addClass(post.title)
            postElement.append(postBody)
            if (post.title === 'Latest News') {
              postElement.appendTo('.latestNews')
            }
            else if (post.title === 'Current Promotions') {
              postElement.appendTo('.currentPromotions')
            }

        })
    }
  }
});
