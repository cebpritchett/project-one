/*var loadquote = function() {
  $.ajax({
    type: "GET",
    url:
      "https://andruxnet-random-famous-  quotes.p.mashape.com/?cat=movies&count=1",
    data: {},
    dataType: "json",
    success: function(data) {
      $("#quote-text").html('"' + data.quote + '"');
      $("#quote-author").html("&mdash;" + " " + data.author);
    },
    error: function(err) {
      alert("Internet Disconnected!");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "X-Mashape-Authorization",
        "Bk47jF0aCnmshsTi1VQAyxueTH2ap1BJxjejsnw9wHKPr2OmG4"
      );
    }
  });
};*/
$(document).ready(function(){
    var quoteURL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax( {
      url: quoteURL,
      success: function(data) {
        console.log(data);
      
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-content').text(post.content);
        $('#quote-title').html(post.title);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  }); 
});
