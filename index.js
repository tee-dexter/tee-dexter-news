$(document).ready(function(){
    var url = 'http://hn.algolia.com/api/v1/search_by_date?query=javascript'
    $.getJSON(url, function(data){

        var currentQuote = ''
        var quotes = data.hits

        $('.read').on('click', function(){
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
            console.log(currentQuote)
            $(".quoteBody").hide()
            $('.quote').html(currentQuote.title).attr('href', currentQuote.url).attr('target', '_blank')
            $('.quoteAuthor').html(currentQuote.author)

            $('.tweetQuote').attr('href','https://www.google.com/search?client=firefox-b-d&q= '+ currentQuote.title)
            .attr('target', '_blank')
            .attr('disabled', false)

            $('.read').html('next news')
        })
    })
})