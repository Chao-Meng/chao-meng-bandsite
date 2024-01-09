import BandSiteApi from "./band-site-api.js";
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

let leftDiv = createDiv("comment__container--left");

let rightDiv = createDiv("comment__container--right");

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

//listen click the comment button event
let button = document.querySelector(".comment__button");
comment.addEventListener("submit", function (event) {
  event.preventDefault();
  handleSubmit();
});

//listen click the nav menu action
document.getElementById("shows").addEventListener("click", function () {
  window.location.href = "../pages/shows.html";
});

document.getElementById("home").addEventListener("click", function () {
  window.location.href = "../index.html";
});

//sprint-3
//create an instance of the BandSiteApi class
const apiKey = "42e72325-5f6b-44ea-9e22-a69dd72a2edb";
const api = new BandSiteApi(apiKey);
window.onload = function () {
  api.getComments().then((comments) => {
    console.log("Comments:", comments);
    comments.forEach(function (comment) {
      const newDate = transferDate(comment);
      addComment(comment.name, newDate, comment.comment);
    });
  });
};

function handleSubmit() {
  const userName = nameInput.value;
  const userComment = commentInput.value;
  const commentData = {
    name: userName,
    comment: userComment,
  };

  //add new comments that can be stored on the backend
  //get the response from promise when it fulfilled
  api
    .postComment(commentData)
    .then((response) => {
      console.log("comment posted", response);
      let newCommentText = response.comment;
      let newName = response.name;
      let newDate = transferDate(response);
      if (nameInput.value.trim() === "") {
        nameInput.classList.remove("comment__name");
        nameInput.classList.add("comment__name--invalid");
        nameInput.placeholder = "Please input your name";
        return;
      } else {
        if (newCommentText) {
          addComment(newName, newDate, newCommentText);
        }
      }
      comment.reset();
    })
    //get the error when promise was rejected
    .catch((error) => {
      console.error(error);
    });
}

function transferDate(time) {
  let date = new Date(time.timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  let formattedDate = `${month}/${day}/${year}`;
  console.log(formattedDate);
  return formattedDate;
}
