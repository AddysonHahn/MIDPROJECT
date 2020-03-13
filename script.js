var date = new Date ();
document.body.innerHTML = date;

var posts = [
  {username: "mr.whiskers123" ,
  image: "https://www.pngkey.com/png/full/324-3242430_mr-whiskers-hands-brandy-and-mr-whiskers-mr.png",
  text: "I luv Tuna <3" ,
  likes: 4 ,
  retweets: 1,
  comments: 6 
  },
   {username: "bobbobberson",
  image: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTU5NTgxMTk2/bob-ross-9464216-1-402.jpg" ,
  text: "Just an average guy",
  likes: 7,
  retweets: 3,
  comments: 2 
  },
   {username: "muppetman",
  image: "https://i.imgur.com/ky6oYaD.jpg" ,
  text: "i am the muppet man",
  likes: 4,
  retweets:8 ,
  comments:0 
  },
   {username: "cinderella",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlE-5ZiYdd-kK8Nl8SpmPNvQOdzUKKaow-9aPg_M03FupXHR-QXQ&s" ,
  text: "I have to get home by midnight!",
  likes:1 ,
  retweets:6 ,
  comments:2 
  },
   {username: "dr.phill",
  image: "https://tvguide1.cbsistatic.com/feed/1/896/thumbs/92315896_c375x708+520+0_375x708.jpg",
  text: "Am I even a real doctor?",
  likes:9 ,
  retweets:7 ,
  comments:6 
  },
     {username: "mark_zucker",
  image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
  text: "you coppied me",
  likes:5 ,
  retweets:9 ,
  comments:4 
  }, 
]
var dumbTweet = {
  username:"Princess Peach",
image:"https://vignette.wikia.nocookie.net/mario/images/a/a6/Princess_Peach_SMP.png/revision/latest?cb=20190620162055",
  text:"This is a dumb post",
  likes:1,
  comments:1,
  retweets:1,
}
var dumbTweetEles = [];


var postEles = [];

function post(tweet) {
  var that = this;
  this.retweets = tweet.retweets;
  this.comments = tweet.comments;
  this.likes = tweet.likes;

  this.ele = document.createElement("div");
  this.ele.classList.add("tweet");
  this.usernameEle = document.createElement("h1");
  this.textEle = document.createElement("div");
  this.retweetsEle = document.createElement("h3");
  this.commentsEle = document.createElement("h3");
  this.likesEle = document.createElement("h3");
  
  var deleteButton = document.createElement("div");
  var deleteButtonEle = document.createElement("button");
  deleteButton.style.float = "right";
  deleteButton.innerHTML = "Delete";
  deleteButtonEle.appendChild(deleteButton);
 
  
  deleteButtonEle.addEventListener("click", function(){
    that.ele.style.display = "none";
    deleteButtonEle.style.display = "none";
  });

  this.ele.appendChild(this.usernameEle);
  var imageEle = document.createElement("img");
  imageEle.src = posts[i].image;
  this.ele.appendChild(imageEle);
  this.ele.appendChild(deleteButtonEle);
  this.ele.appendChild(this.textEle);
  this.ele.appendChild(this.retweetsEle);
  this.ele.appendChild(this.commentsEle);
  this.ele.appendChild(this.likesEle);  
  
  this.usernameEle.innerHTML = tweet.username;
  this.textEle.innerHTML = tweet.text;
  this.retweetsEle.innerHTML = "Retweets: " + tweet.retweets;
  this.likesEle.innerHTML = "Likes: " + tweet.likes;
  this.commentsEle.innerHTML = "Comments: " + tweet.comments;
  
  this.retweetsEle.addEventListener("mouseover", function(){
    that.retweetsEle.style.color = "green";
  });
  
  this.retweetsEle.addEventListener("mouseout", function(){
    that.retweetsEle.style.color = "white";
  });
  
  this.commentsEle.addEventListener("mouseover", function(){
    that.commentsEle.style.color = "blue";
  });
  
  this.commentsEle.addEventListener("mouseout", function(){
    that.commentsEle.style.color = "white";
  });
  
  this.likesEle.addEventListener("mouseover", function(){
    that.likesEle.style.color = "red";
  });
  
  this.likesEle.addEventListener("mouseout", function(){
    that.likesEle.style.color = "white";
  });
  
  this.retweetsEle.addEventListener("click", function() {
    that.retweets = that.retweets + 1;
    that.retweetsEle.innerHTML = "Retweets: " + that.retweets;
    if(that.retweets>=20){
      document.body.style.backgroundColor = "green"
     
    }
  });

  this.commentsEle.addEventListener("click", function() {
    that.comments = that.comments + 1;
    that.commentsEle.innerHTML = "Comments: " + that.comments;
    if(that.comments>=20){
      document.body.style.backgroundColor = "blue";
     
    }
  });

  this.likesEle.addEventListener("click", function() {
    that.likes = that.likes + 1;
    that.likesEle.innerHTML = "Likes: " + that.likes;
    if(that.likes>=20){
      document.body.style.backgroundColor = "red";
      
    }
  });

  document.body.appendChild(this.ele);
}

function dumb(){
  var that = this;
  this.likes = dumbTweet.likes;
  this.comments = dumbTweet.comments;
  this.retweets = dumbTweet.retweets;
  
  this.ele = document.createElement("div");
  this.ele.classList.add("tweet");
  this.usernameEle = document.createElement("h1")
  this.imageEle = document.createElement("img");
  this.imageEle.setAttribute("src", dumbTweet.image);
  this.textEle = document.createElement("h3");
  this.retweetsEle = document.createElement("h2");
  this.commentsEle = document.createElement("h2");
  this.likesEle = document.createElement("h2");

  var button = document.createElement("div");
  var buttonEle = document.createElement("button");
buttonEle.style.float = "right";
  button.innerHTML = "Delete";
  buttonEle.appendChild(button);
  document.body.appendChild(buttonEle);
  
  buttonEle.addEventListener("click", function(){
    that.ele.style.display = "none";
    buttonEle.style.display = "none";
  });
  
   this.ele.appendChild(this.usernameEle);
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.textEle);
  this.ele.appendChild(this.retweetsEle);
  this.ele.appendChild(this.commentsEle);
  this.ele.appendChild(this.likesEle);
  
  this.imageEle.innerHTML= '<img src="'+this.image+'">'; 
  this.usernameEle.innerHTML=dumbTweet.username;
  this.textEle.innerHTML=dumbTweet.text;
  this.retweetsEle.innerHTML="Retweets: "+this.retweets;
  this.likesEle.innerHTML="Likes: "+this.likes;
  this.commentsEle.innerHTML="Comments: "+this.comments;
  
  this.retweetsEle.addEventListener("mouseover", function(){
    that.retweetsEle.style.color = "green";
  });
  
  this.retweetsEle.addEventListener("mouseout", function(){
    that.retweetsEle.style.color = "white";
  });
  
  this.commentsEle.addEventListener("mouseover", function(){
    that.commentsEle.style.color = "blue";
  });
  
  this.commentsEle.addEventListener("mouseout", function(){
    that.commentsEle.style.color = "white";
  });
  
  this.likesEle.addEventListener("mouseover", function(){
    that.likesEle.style.color = "red";
  });
  
  this.likesEle.addEventListener("mouseout", function(){
    that.likesEle.style.color = "white";
  });
  
  this.retweetsEle.addEventListener("click", function() {
    that.retweets = that.retweets + 1;
    that.retweetsEle.innerHTML = "Retweets: " + that.retweets;
    if(that.retweets>=20){
      document.body.style.backgroundColor = "green"
      
    }
  });

  this.commentsEle.addEventListener("click", function() {
    that.comments = that.comments + 1;
    that.commentsEle.innerHTML = "Comments: " + that.comments;
    if(that.comments>=20){
      document.body.style.backgroundColor = "blue";
     
    }
  });

  this.likesEle.addEventListener("click", function() {
    that.likes = that.likes + 1;
    that.likesEle.innerHTML = "Likes: " + that.likes;
    if(that.likes>=20){
      that.ele.style.backgroundColor = "red";
     
    }
  });

  document.body.appendChild(this.ele);
}

for (var i = 0; i < posts.length; i++) {
  postEles.push(new post(posts[i]));
}

var dumbButton = document.createElement("div");
var dumbButtonEle = document.createElement("button");
dumbButton.innerHTML = "Post";
dumbButtonEle.appendChild(dumbButton);
document.body.appendChild(dumbButtonEle);

dumbButtonEle.addEventListener("click", function(){
  
  dumbTweetEles.push(new dumb());
});