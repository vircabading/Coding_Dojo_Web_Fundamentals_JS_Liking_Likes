//////////////////////////////////////////////////
// Subj:    Coding Dojo > Web Fundamentals > Javascript > Likes
// By:      Virgilio D. Cabading Jr.    Created: October 19, 2021
//////////////////////////////////////////////////

var userFeed = [
    {"name" : "Neil M",
    "likes" : 9,
    "message" : "I just set up this new discord bot, let me know what you all think. <a href=''>link</a>"},
    {"name" : "Nichole K",
    "likes" : 12,
    "message" : "Just finished my <a href=''>next comic</a>"},
    {"name" : "Jim",
    "likes" : 9,
    "message" : "I can't stop listening to the <a href=''>new album.</a>  Who else is liking it?"},
    {"name" : "Joe Mama",
    "likes" : 1337,
    "message" : "What if I told you, a good user experience can actually make you more money"}
];

function addLike(element) {
    console.log("Element name: ", element.name);
    console.log("Index: " , parseInt(element.name));
    userFeed[parseInt(element.name)].likes++;
    printUserFeed();
}

function printUserFeed() {
    var content = "";
    
    for (var x=0; x < userFeed.length; x++) {
        content += "<div class='card container flex_down pad_1'>";
            content += "<div class='container flex_right justify_between pad_1 margin_1 align_center'>";
                content += "<h2>" + userFeed[x].name + "</h2>";
                content += "<div class='container flex_right pad_1 margin_1 align_center justify_space wdt_30'>";
                    content += "<h3 name='" + userFeed[x].name + "Likes'>" + userFeed[x].likes + " Likes</h3>";
                    content += "<button name='" + x +"button' class='btn likes_btn' onClick='addLike(this)'>";
                        content += "Like";
                    content += "</button>";
                content += "</div>"; 
            content += "</div>";
            content += "<div class='container justify_center align_center'>";
                content += userFeed[x].message;
            content += "</div>";
        content += "</div>";
    }

    console.log(content);
    document.getElementById('user_feed').innerHTML = content;
}


printUserFeed();