/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(() => {
    // Test / driver code (temporary). Eventually will get this from the server.
    // Fake data taken from tweets.json
    const data = [
        {
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
        "created_at": 11116232227
        },
        {
        "user": {
            "name": "Descartes",
            "avatars": {
            "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
            "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
            "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 116117959088
        },
        {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
            "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
        }
    ];
  
    const renderTweets = (tweets) => {
        // loops through tweets
        for (let tweet of tweets) {
            //console.log(createTweetElement(tweet))
            $( "#allTweets" ).append(createTweetElement(tweet));
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
        //if not in hours (still days) than print [x] days old 
        } else {
            $footer.append(`<p class='posted_date'>${Math.floor(timeSinceTweet)} days ago`);
        }
        return $tweet;
    }    
    
    renderTweets(data);

});
