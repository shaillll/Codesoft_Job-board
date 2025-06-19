// script.js

// Animated Counters
function animateCounter(id, target) {
  let count = 0;
  const step = target / 100;
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).innerText = Math.floor(count);
  }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounter("jobsCount", 4536);
  animateCounter("companiesCount", 1200);
  animateCounter("successCount", 980);
  displayJobs(jobs);
});

// Job Listing Sample
const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Bangalore",
    type: "Full-time"
  },
  {
    title: "Backend Engineer",
    company: "DataSoft",
    location: "Remote",
    type: "Part-time"
  },
  {
    title: "UI/UX Designer",
    company: "DesignPro",
    location: "Mumbai",
    type: "Freelance"
  },
  {
    title: "Project Manager",
    company: "Buildit Ltd",
    location: "Delhi",
    type: "Full-time"
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Contract"
  }
];

function displayJobs(jobs) {
  const container = document.createElement("section");
  container.className = "job-listings";
  container.innerHTML = `<h2 style="text-align:center; margin: 2rem auto; color: #2196f3;">Exciting Job Openings</h2>`;

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
      <span>${job.type}</span>
      <button onclick="openModal()">Apply Now</button>
    `;
    container.appendChild(card);
  });
  

  document.body.appendChild(container);
}


// Motivational Quote Rotator
const quotes = [
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Opportunities don't happen. You create them.",
  "The future depends on what you do today.",
  "Dream big. Work hard. Stay focused."
];

function rotateQuotes() {
  const quoteElement = document.getElementById("motivational-quote");
  let index = 0;
  setInterval(() => {
    quoteElement.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }, 5000);
}

document.addEventListener("DOMContentLoaded", rotateQuotes);

// Optional: Persist dark mode using localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
}

function switchAuth(type) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  if (type === "login") {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    loginTab.classList.add("active-tab");
    registerTab.classList.remove("active-tab");
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    registerTab.classList.add("active-tab");
    loginTab.classList.remove("active-tab");
  }
}

