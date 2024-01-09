import BandSiteApi from "./band-site-api.js";
// sprint-2
function createDiv(className) {
  let divName = document.createElement("div");
  divName.classList.add(className);
  return divName;
}

const card = document.getElementById("card");
const myForm = document.createElement("form");
myForm.classList.add("card");
card.appendChild(myForm);
myForm.action = "submit";

const title = document.createElement("h2");
title.textContent = "Shows";
title.classList.add("card__title");
myForm.appendChild(title);

//parent div for date, venue, location, button and divider, tablet and desktop version
const parentDiv = createDiv("card__container");
myForm.appendChild(parentDiv);
const cardLabelTablet = createDiv("card__label--tablet");
parentDiv.appendChild(cardLabelTablet);
const dateLabel = createLabel("card__date--tablet", "DATE");
cardLabelTablet.appendChild(dateLabel);
const venueLabel = createLabel("card__venue--tablet", "VENUE");
cardLabelTablet.appendChild(venueLabel);
const locationLabel = createLabel("card__location--tablet", "LOCATION");
cardLabelTablet.appendChild(locationLabel);

function createLabel(className, text) {
  const label = document.createElement("label");
  label.classList.add(className);
  label.textContent = text;
  return label;
}

function createDivider() {
  let divider = document.createElement("div");
  divider.classList.add("card__divider");
  return divider;
}

//add cards with date, venue,location
function createP() {
  const pInfo = document.createElement("p");
  pInfo.classList.add("card__p");
  return pInfo;
}
function addCard(cardDate, cardVenue, cardLocation) {
  const cardContent = createDiv("card__content");
  parentDiv.appendChild(cardContent);

  //child div for date, venue, location
  const smallDiv = createDiv("card__container--small");
  cardContent.appendChild(smallDiv);

  const smallDivs = document.querySelectorAll(".card__container--small");
  //listen click a item
  smallDivs.forEach((div) => {
    div.addEventListener("click", function () {
      smallDivs.forEach((innerDiv) => {
        innerDiv.classList.remove("card__container--backgroundColor");
      });
      div.classList.add("card__container--backgroundColor");
    });
  });
  //listen hover(mouseenter) a item
  smallDivs.forEach((div) => {
    div.addEventListener("mouseenter", function () {
      smallDivs.forEach((innerDiv) => {
        innerDiv.classList.remove("card__container--hovered");
      });
      div.classList.add("card__container--hovered");
    });
  });
  //listen mouseleave a item
  smallDivs.forEach((div) => {
    div.addEventListener("mouseleave", function () {
      innerDiv.classList.remove("card__container--hovered");
    });
  });

  const dateContainer = createDiv("card__container--date");
  smallDiv.appendChild(dateContainer);

  const dateLabel = createLabel("card__date", "DATE");
  dateContainer.appendChild(dateLabel);
  const dateInfo = document.createElement("p");
  dateInfo.classList.add("card__p--bold");
  dateInfo.textContent = cardDate;
  dateContainer.appendChild(dateInfo);

  const venueContainer = createDiv("card__container--venue");
  smallDiv.appendChild(venueContainer);
  const venueLabel = createLabel("card__venue", "VENUE");
  venueContainer.appendChild(venueLabel);
  const venueInfo = createP();
  venueInfo.textContent = cardVenue;
  venueContainer.appendChild(venueInfo);

  const locationContainer = createDiv("card__container--location");
  smallDiv.appendChild(locationContainer);
  const locationLabel = createLabel("card__location", "LOCATION");
  locationContainer.appendChild(locationLabel);
  const locationInfo = createP();
  locationInfo.textContent = cardLocation;
  locationContainer.appendChild(locationInfo);

  const btn = document.createElement("button");
  btn.classList.add("card__button");

  btn.textContent = "BUY TICKETS";
  smallDiv.appendChild(btn);

  const divider = createDivider();
  cardContent.appendChild(divider);
}

//listen click the nav menu action
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document.getElementById("shows").addEventListener("click", function () {
  window.location.href = "../pages/shows.html";
});

//sprint-3
//create an instance of the BandSiteApi class
const apiKey = "42e72325-5f6b-44ea-9e22-a69dd72a2edb";
const api = new BandSiteApi(apiKey);
window.onload = function () {
  api.getShows().then((response) => {
    console.log("show:", response);
    response.forEach(function (show) {
      const newDate = transferDate(show);
      addCard(newDate, show.place, show.location);
      console.log("show:", show.place);
    });
  });
};

function transferDate(time) {
  let date = new Date(time.date);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  let formattedDate = `${month}/${day}/${year}`;
  console.log(formattedDate);
  return formattedDate;
}
