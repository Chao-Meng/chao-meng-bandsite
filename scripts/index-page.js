// sprint-2
let comment = document.getElementById("comment");
let title = document.createElement("h2");
title.textContent = "Join the Conversation";
title.classList.add("comment__title");

//parent div of pic and form to use flexbox
let parentDiv = document.createElement("div");
parentDiv.classList.add("comment__container");
//child div for pic
let leftDiv = document.createElement("div");
leftDiv.classList.add("comment__container--left");
//child div for form
let rightDiv = document.createElement("div");
rightDiv.classList.add("comment__container--right");
//create pic in left div
let pic = document.createElement("img");
pic.src = "../assets/images/Mohan-muruge.jpg";
pic.classList.add("comment__pic");
//create the title for name input form
let formName = document.createElement("label");
formName.textContent = "NAME";
formName.classList.add("comment__label");
//create the input form
let nameInput = document.createElement("textarea");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("class", "comment__name");
nameInput.setAttribute("placeholder", " Enter your Name");
//create the title for comment input form
let commentName = document.createElement("label");
commentName.textContent = "COMMENT";
commentName.classList.add("comment__label");
//create the comment form
let commentInput = document.createElement("textarea");
commentInput.setAttribute("type", "text");
commentInput.setAttribute("id", "comments");
commentInput.setAttribute("rows", "6");
commentInput.setAttribute("class", "comment__comments");
commentInput.setAttribute("placeholder", " Add a new comment");
//create the comment button
let commentButton = document.createElement("button");
commentButton.textContent = "COMMENT";
commentButton.classList.add("comment__button");
//append the children div into their parent div
parentDiv.appendChild(leftDiv);
parentDiv.appendChild(rightDiv);

comment.appendChild(title);
comment.appendChild(parentDiv);
leftDiv.appendChild(pic);
rightDiv.appendChild(formName);
rightDiv.appendChild(nameInput);
rightDiv.appendChild(commentName);
rightDiv.appendChild(commentInput);
rightDiv.appendChild(commentButton);

let divider = document.createElement("div");
divider.textContent = "";
divider.classList.add("comment__divider");
comment.appendChild(divider);

//create a new div to store default comments and new comments
let commentList = document.createElement("div");
commentList.classList.add("comment__list");

//add default comment and new comment
function addComment(commentName, commentDate, commentContent) {
  let commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

  let avatar = document.createElement("img");
  avatar.classList.add("comment__pic");

  let commentAuthor = document.createElement("div");
  commentAuthor.classList.add("comment__name");
  commentAuthor.textContent = commentName;

  let commentTime = document.createElement("div");
  commentTime.classList.add("comment__date");
  commentTime.textContent = commentDate;

  let commentText = document.createElement("div");
  commentText.classList.add("comment__content");
  commentText.textContent = commentContent;

  commentContainer.appendChild(avatar);
  commentContainer.appendChild(commentAuthor);
  commentContainer.appendChild(commentTime);
  commentContainer.appendChild(commentText);
  //put the new comments on the top
  commentList.prepend(commentContainer);
  comment.appendChild(commentList);
}
let defaultComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/19/2021",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

window.onload = function () {
  defaultComments.forEach(function (comment) {
    addComment(comment.name, comment.date, comment.content);
  });
};

let button = document.querySelector(".comment__button");
button.addEventListener("click", function () {
  //assign the input comment to it
  let newCommentText = commentInput.value;
  let newName = nameInput.value;
  let newDate = new Date().toISOString().split("T")[0];
  if (newCommentText) {
    addComment(newName, newDate, newCommentText);
  }
});
