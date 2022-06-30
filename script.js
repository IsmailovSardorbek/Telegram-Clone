const userTabs = document.querySelectorAll(".friend-drawer--onhover");

const personName = document.getElementById("person-name");

const profileAvatar = document.querySelector("#avatar");

const lastSeen = document.getElementById("last-seen");

const chatBubbles = document.querySelectorAll(".chat-bubble");

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

userTabs.forEach((user, index) => {
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
const chatContainer = document.querySelector(".container");

const changeTheme = () => {
  const themeBtn = document.getElementById("change-theme");

  const settingsTray = document.querySelectorAll(".settings-tray");

  themeBtn.onclick = () => {
    themeBtn.classList.toggle("bx-sun");

    chatContainer.classList.toggle("dark");

    userTabs.forEach((user) => {
      user.classList.toggle("dark");
    });

    settingsTray.forEach((tray) => {
      tray.classList.toggle("dark");
    });
  };
};

changeTheme();

const findOnSearch = () => {
  const users = document.querySelectorAll(".user");
  const searchInput = document.getElementById("text");

  searchInput.addEventListener("input", (e) => {
    users.forEach((user) => {
      if (user.textContent.includes(e.target.value)) {
        for (let i = 0; i < userTabs.length; i++) {
          let neededName = userTabs[i].querySelector(".user");
          if (neededName.innerHTML.includes(e.target.value)) {
            userTabs[i].style.display = "block";
          } else {
            userTabs[i].style.display = "none";
          }
        }
      }
    });
  });
};

findOnSearch();
