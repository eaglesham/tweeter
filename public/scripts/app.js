/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(() => {
    // Test / driver code (temporary). Eventually will get this from the server.
    const tweetData = {
        "user": {
        "name": "Newton",
        "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
        },
        "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    }
    

    
    // Test / driver code (temporary)
    // console.log($tweet); // to see what it looks like
    // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc. 
    
    var createTweetElement = (tweetObject) => {
        var $tweet = $("<article>").addClass("tweet");
        
        var $header = $("<header>").addClass("tweet_header").appendTo($tweet);
        var $bodyDiv = $("<div>").addClass("tweet_body").appendTo($tweet);
        var $footer = $("<footer>").addClass("tweet_footer").appendTo($tweet)   ;
        
        var $name = $("<p class='tweet_name'>").text(tweetObject.user.name).appendTo($header);
        var $avatar = $("<img class='tweet_avatar'>").attr('src', tweetObject.user.avatars.small).appendTo($header);
        var $handle = $("<h4 class='tweet_id'>").text(tweetObject.user.handle).appendTo($header);
        var $body = $("<p class='tweet_body'>").text(tweetObject.content.text).appendTo($bodyDiv);
        
        //formula for getting date tweet was created
        var dateCreated = Date.now() - tweetObject.created_at;
        var $postDate = $("<p class='posted_date'>").text(dateCreated).appendTo($footer);
        
        return $tweet;
    }

    var $tweet = createTweetElement(tweetData);
    console.log($tweet);
});
 

/* <article class="tweet">
            <header class="tweet_header">
              <img class="tweet_avatar" src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png">
              <p class="tweet_name">User's Name</p>
              <h4 class="tweet_id">@whatever</h4>
            </header>
            <div class="tweet_body">
              <p class="tweet_text">Little tweet here</p>
            </div>
            <footer class="tweet_footer">
              <p class="posted_date">X days ago</p>
            </footer>
          </article> */
