// sprint-2

function createDiv(className) {
  let divName = document.createElement("div");
  divName.classList.add(className);
  return divName;
}

const card = document.getElementById("card");
const title = document.createElement("h2");
title.textContent = "Shows";
title.classList.add("card__title");
card.appendChild(title);

//parent div for date, venue, location, button and divider
const parentDiv = createDiv("card__container");
card.appendChild(parentDiv);

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
  const cardContent = createDiv("comment__content");
  parentDiv.appendChild(cardContent);

  //child div for date, venue, location
  const smallDiv = createDiv("comment__container--small");
  cardContent.appendChild(smallDiv);

  const dateContainer = createDiv("card__container--date");
  smallDiv.appendChild(dateContainer);

  const dateLabel = createLabel("card__date", "DATE");
  dateContainer.appendChild(dateLabel);
  const dateInfo = createP();
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
  const locationLabel = createLabel("card__lacation", "LOCATION");
  locationContainer.appendChild(locationLabel);
  const locationInfo = createP();
  locationInfo.textContent = cardLocation;
  locationContainer.appendChild(locationInfo);

  const btn = document.createElement("button");
  btn.classList.add("card__button");

  btn.textContent = "BUY TICKETS";
  cardContent.appendChild(btn);

  const divider = createDivider();
  cardContent.appendChild(divider);
}

let defaultCards = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: `San Francisco, CA`,
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: `San Francisco, CA`,
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: `San Francisco, CA`,
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: `San Francisco, CA`,
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: `San Francisco, CA`,
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: `San Francisco, CA`,
  },
];

//load the default cards on the window
window.onload = function () {
  defaultCards.forEach(function (card) {
    addCard(card.date, card.venue, card.location);
  });
};
