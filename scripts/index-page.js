let comment = document.getElementById("comment");
let title = document.createElement("h2");
title.textContent = "Join the Conversation";
title.classList.add("comment__title");
comment.appendChild(title);

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
let formName = document.createElement("p");
formName.textContent = "NAME";
formName.classList.add("comment__subtitle");

//create the input form
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("placeholder", "Enter your Name");

//create the title for comment input form
let commentName = document.createElement("p");
commentName.textContent = "COMMENT";
commentName.classList.add("comment__subtitle");

//create the comment form
let commentInput = document.createElement("input");
commentInput.setAttribute("type", "text");
commentInput.setAttribute("id", "comments");
commentInput.setAttribute("placeholder", "Add a new comment");

//create the comment button
let commentButton = document.createElement("button");
commentButton.textContent = "COMMENT";
commentButton.classList.add("comment__button");

//append the children div into their parent div
parentDiv.appendChild(leftDiv);
parentDiv.appendChild(rightDiv);
comment.appendChild(parentDiv);
leftDiv.appendChild(pic);
rightDiv.appendChild(formName);
rightDiv.appendChild(nameInput);
rightDiv.appendChild(commentName);
rightDiv.appendChild(commentInput);
rightDiv.appendChild(commentButton);
