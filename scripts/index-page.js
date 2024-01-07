// sprint-2

function createDiv(className) {
  let divName = document.createElement("div");
  divName.classList.add(className);
  return divName;
}

let comment = document.getElementById("comment");
comment.classList.add("comment");
let title = document.createElement("h2");
title.textContent = "Join the Conversation";
title.classList.add("comment__title");

//parent div of pic and form to use flexbox
let parentDiv = createDiv("comment__container");

//child div for pic
let leftDiv = createDiv("comment__container--left");

//child div for form
let rightDiv = createDiv("comment__container--right");

//create pic in left div
let pic = document.createElement("img");
pic.src = "../assets/images/Mohan-muruge.jpg";
pic.classList.add("comment__pic");

//create the title for name input form
let formName = document.createElement("label");
formName.textContent = "NAME";
formName.classList.add("comment__label");

function createInput(text, name, className, placeholder) {
  let inputName = document.createElement("input");
  inputName.type = text;
  inputName.id = name;
  inputName.className = className;
  inputName.placeholder = placeholder;
  return inputName;
}
let nameInput = createInput(
  "text",
  "name",
  "comment__name",
  " Enter your Name"
);
//create the title for comment input form
let commentName = document.createElement("label");
commentName.textContent = "COMMENT";
commentName.classList.add("comment__label");
//nameInput.required = true;
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

function createDivider() {
  let divider = document.createElement("div");
  divider.classList.add("comment__divider");
  return divider;
}

let divider = createDivider();
comment.appendChild(divider);

//create a new div to store default comments and new comments
let commentList = document.createElement("div");
commentList.classList.add("comment__list");

//add comments with author name, date and comment content
function addComment(commentName, commentDate, commentContent) {
  let commentConBig = document.createElement("div");
  commentConBig.classList.add("comment__container--big");

  let commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

  let commentConLeft = document.createElement("div");
  commentConLeft.classList.add("comment__container--left");

  let avatar = document.createElement("img");
  avatar.classList.add("comment__pic");

  //create a container to store name, date and comements, is the sibling of comemeng_pic
  //use flex display for pic and the container
  let commentConRight = document.createElement("div");
  commentConRight.classList.add("comment__container--right");
  //create a container to store comment and date
  let commentConUp = document.createElement("div");
  commentConUp.classList.add("comment__container--up");

  let commentAuthor = document.createElement("div");
  commentAuthor.classList.add("comment__author");
  commentAuthor.textContent = commentName;

  let commentTime = document.createElement("div");
  commentTime.classList.add("comment__date");
  commentTime.textContent = commentDate;

  let commentText = document.createElement("div");
  commentText.classList.add("comment__content");
  commentText.textContent = commentContent;

  //put the new comments on the top
  commentList.prepend(commentConBig);
  commentConBig.appendChild(commentContainer);
  comment.appendChild(commentList);
  commentContainer.appendChild(commentConLeft);

  commentConLeft.appendChild(avatar);
  commentContainer.appendChild(commentConRight);
  commentConRight.appendChild(commentConUp);
  commentConUp.appendChild(commentAuthor);
  commentConUp.appendChild(commentTime);
  commentConRight.appendChild(commentText);
  let dividerNew = createDivider();
  commentConBig.appendChild(dividerNew);
}

let defaultComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    content: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up 
       this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`,
  },
  {
    name: "Emilie Beach",
    date: "01/19/2021",
    content: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was
       one day of my life I could relive, this would be it. What an incredible day.`,
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    content: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. 
      Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`,
  },
];

//compare the date string of defaults comments
function compareDates(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
//sort the default comments in ascending time
defaultComments.sort(compareDates);

//load the default 3 comments on the window
window.onload = function () {
  defaultComments.forEach(function (comment) {
    addComment(comment.name, comment.date, comment.content);
  });
};
//listen click the comment button event
let button = document.querySelector(".comment__button");
comment.addEventListener("submit", function (event) {
  event.preventDefault();
  //pass the input comment value
  let newCommentText = commentInput.value;
  let newName = nameInput.value;

  //get the current date in month/day/year format
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  let newDate = `${month}/${day}/${year}`;
  if (nameInput.value.trim() === "") {
    nameInput.classList.remove("comment__name");
    nameInput.classList.add("comment__name--invalid");
    nameInput.placeholder = "Please input your name";
    event.preventDefault();
  } else {
    if (newCommentText) {
      addComment(newName, newDate, newCommentText);
    }
  }
  comment.reset();
});
