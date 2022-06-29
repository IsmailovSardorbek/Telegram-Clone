const users = document.querySelectorAll(".friend-drawer--onhover");

const personName = document.getElementById("person-name");

const profileAvatar = document.querySelector("#avatar");

const lastSeen = document.getElementById("last-seen");

const chatBubbles = document.querySelectorAll(".chat-bubble");

const themeBtn = document.getElementById("change-theme");
const chatContainer = document.querySelector(".container");

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("bx-moon");
  chatContainer.classList.toggle("dark-theme");
});

let people = [
  { name: "Robo Cop", info: `Last seen 2 hours ago` },
  { name: "Optimus", info: `Last seen recently` },
  { name: "Skynet", info: `Last seen just now` },
  { name: "Termy", info: `Last seen 5 minutes ago` },
  { name: "Richard", info: `Last seen a long time ago` },
  { name: "XXXXX", info: `Last seen 1 hour ago` },
];

let images = [
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg",
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg",
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png",
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg",
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg",
  "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg",
];

users.forEach((user, index) => {
  user.addEventListener("click", function () {
    let activeUser = document.querySelector(".active-user");
    activeUser.className = activeUser.className.replace(" active-user", "");

    this.classList.add("active-user");
    profileAvatar.src = images[index];

    personName.textContent = people[index].name;
    lastSeen.textContent = people[index].info;

    chatBubbles.forEach((bubble) => {
      bubble.classList.toggle("fade-in");
    });
  });
});


