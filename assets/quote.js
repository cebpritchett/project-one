var loadquote = function() {
    $.ajax({
            type: "GET",
            url: "https://andruxnet-random-famous-  quotes.p.mashape.com/?cat=movies&count=1",
            data: {},
            dataType: 'json',
            success: function(data) {
            $("#quote-text").html('"' + data.quote + '"');
            $("#quote-author").html('&mdash;' + ' ' + data.author);  
            },
            error: function(err) { alert("Internet Disconnected!"); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "Bk47jF0aCnmshsTi1VQAyxueTH2ap1BJxjejsnw9wHKPr2OmG4");
            }
    });
};
