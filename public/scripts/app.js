/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(() => {
 
  
    const renderTweets = (tweets) => {
        // loops through tweets
        for (let tweet of tweets) {
            //console.log(createTweetElement(tweet))
            $( "#allTweets" ).prepend(createTweetElement(tweet));
        }  
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container
    } 
  
    const createTweetElement = (tweetObject) => {
        let $tweet = $("<article>").addClass("tweet");
        
        let $header = $("<header>").addClass("tweet_header").appendTo($tweet);
        let $bodyDiv = $("<div>").addClass("tweet_body").appendTo($tweet);
        let $footer = $("<footer>").addClass("tweet_footer").appendTo($tweet)   ;
        
        let $name = $("<p class='tweet_name'>").text(tweetObject.user.name).appendTo($header);
        let $avatar = $("<img class='tweet_avatar'>").attr('src', tweetObject.user.avatars.small).appendTo($header);
        let $handle = $("<h4 class='tweet_id'>").text(tweetObject.user.handle).appendTo($header);
        let $body = $("<p class='tweet_text'>").text(tweetObject.content.text).appendTo($bodyDiv);
        
        //all this code is for appending specific age of tweet with appropriate text beside it
        //converting time in milliseconds to days
        let timeSinceTweet = ((Date.now() - tweetObject.created_at) / (1000 * 60 * 60 * 24));
        let hours = false;
        //if days < 1, multiplying by 24 to get amount of hours ago
        if(timeSinceTweet < 1) {
            timeSinceTweet *= 24;
            hours = true;
        }
    
        if(hours) {
            //if hours is less than 1
            if(timeSinceTweet < 1) {
                let mins = Math.floor(timeSinceTweet * 60);
                $footer.append(`<p class='posted_date'>${mins} minutes ago`);
            } else {
                $footer.append(`<p class='posted_date'>${Math.floor(timeSinceTweet)} hours ago`);
            }
        //if not in hours (still days) then print [x] days old 
        } else {
            $footer.append(`<p class='posted_date'>${Math.floor(timeSinceTweet)} days ago`);
        }
        return $tweet;
    }    
    
   
    const $button = $('#tweet_button');
      
    $button.on('click', function () {        
        event.preventDefault();
        //check if form submitted is empty--return an error, if too many characters--return a different error        
        let $tweetBody = $('#textarea').val();
        if ($tweetBody.length === 0) {
            console.log($tweetBody)
            alert("Text input can NOT be empty!");
            return; 
        } 
        if ($tweetBody.length > 140) {
            alert("Yo, tweet too long! No one wants to read that much from you.");
            return;
        }
            
        //ajax function for add tweet to database then getting tweet and appending container on homepage
        let formData = $("#textarea");
        $.ajax({
            url: '/tweets',
            method: 'POST',
            data: formData.serialize(),
            success: function () {
                //empties all children of allTweets element so that they don't get doubled up on the webpage
                $("#allTweets").empty();
                //get request, done by ajax, is put into success: of ajax post request. this way they happen synchronously
                $.ajax({
                    url: '/tweets',
                    method: 'GET',
                    success:  function (newTweets) {
                        console.log('Success: ', newTweets);
                        renderTweets(newTweets);
                    }
                });
            }   
        }); 
    });

    
    const $composeButton = $("#composeButton");

    $composeButton.on('click', function () {
        $(".new-tweet").slideToggle()
        $("#textarea").focus();$(this).select();
    })



});
