document.addEventListener("DOMContentLoaded", () => {
  const campusData = [
    {
      city: "Delhi",
      state: "Delhi NCR",
      colleges: [
        {
          name: "IIT Delhi",
          course: "B.Tech, M.Tech, MBA, PhD",
          type: "Government",
          category: "engineering computing",
          icon: "IIT",
          knownFor: "Engineering excellence, research, innovation, and top placements.",
          location: "Hauz Khas, New Delhi",
          highlights: ["Research", "Placements", "Tech leadership"],
        },
        {
          name: "University of Delhi",
          course: "B.A, B.Com, B.Sc, BCA",
          type: "Government",
          category: "management computing",
          icon: "DU",
          knownFor: "One of India's most popular universities for undergraduate education.",
          location: "Delhi",
          highlights: ["UG programs", "Reputation", "Affordable education"],
        },
        {
          name: "Jamia Millia Islamia",
          course: "B.Tech, BCA, MBA, Arts",
          type: "Government",
          category: "engineering management computing",
          icon: "JM",
          knownFor: "Strong academic culture with respected professional courses.",
          location: "Jamia Nagar, New Delhi",
          highlights: ["Diverse courses", "Campus life", "Academic strength"],
        },
        {
          name: "IIIT Delhi",
          course: "B.Tech, M.Tech, Research",
          type: "Government",
          category: "engineering computing",
          icon: "II",
          knownFor: "Highly focused on computer science, AI, and modern technology.",
          location: "Okhla, New Delhi",
          highlights: ["CS focus", "AI", "Research"],
        },
        {
          name: "AIIMS Delhi",
          course: "MBBS, MD, Medical Sciences",
          type: "Government",
          category: "medical",
          icon: "AI",
          knownFor: "India's top medical institute with advanced healthcare education.",
          location: "Ansari Nagar, New Delhi",
          highlights: ["Medical excellence", "Healthcare", "Research"],
        },
      ],
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      colleges: [
        {
          name: "IIT Bombay",
          course: "B.Tech, M.Tech, PhD",
          type: "Government",
          category: "engineering computing",
          icon: "IB",
          knownFor: "One of India's most prestigious engineering and research institutes.",
          location: "Powai, Mumbai",
          highlights: ["Top placements", "Research", "Engineering"],
        },
        {
          name: "NMIMS Mumbai",
          course: "BBA, B.Tech, MBA, Law",
          type: "Private",
          category: "management engineering",
          icon: "NM",
          knownFor: "Popular for management, business studies, and professional education.",
          location: "Vile Parle, Mumbai",
          highlights: ["Business studies", "Industry exposure", "Professional focus"],
        },
        {
          name: "St. Xavier's College",
          course: "Arts, Commerce, Science",
          type: "Private",
          category: "management computing",
          icon: "SX",
          knownFor: "Well-known for academic excellence and strong student culture.",
          location: "Fort, Mumbai",
          highlights: ["Legacy", "Student culture", "Academic reputation"],
        },
        {
          name: "NIFT Mumbai",
          course: "Fashion Design, Styling, Creative Tech",
          type: "Government",
          category: "design",
          icon: "NF",
          knownFor: "Top institute for fashion and creative design education.",
          location: "Mumbai",
          highlights: ["Fashion", "Creative programs", "Design careers"],
        },
        {
          name: "SP Jain Institute",
          course: "MBA, Management Programs",
          type: "Private",
          category: "management",
          icon: "SP",
          knownFor: "Premium business school known for strong management programs.",
          location: "Andheri, Mumbai",
          highlights: ["MBA", "Leadership", "Business network"],
        },
      ],
    },
    {
      city: "Pune",
      state: "Maharashtra",
      colleges: [
        {
          name: "COEP",
          course: "B.Tech, M.Tech",
          type: "Government-Aided",
          category: "engineering",
          icon: "CO",
          knownFor: "One of Pune's most respected engineering colleges.",
          location: "Shivajinagar, Pune",
          highlights: ["Engineering legacy", "Technical programs", "Strong alumni"],
        },
        {
          name: "MIT-WPU",
          course: "BCA, B.Tech, MBA",
          type: "Private",
          category: "engineering management computing",
          icon: "MW",
          knownFor: "Modern university with strong industry-oriented programs.",
          location: "Kothrud, Pune",
          highlights: ["Modern campus", "Placements", "Multi-discipline"],
        },
        {
          name: "Symbiosis International University",
          course: "BBA, MBA, Law, IT",
          type: "Private",
          category: "management computing design",
          icon: "SY",
          knownFor: "Popular for management, law, and global exposure.",
          location: "Pune",
          highlights: ["Global exposure", "Management", "Professional programs"],
        },
        {
          name: "PICT",
          course: "B.Tech, Computer Engineering",
          type: "Private",
          category: "engineering computing",
          icon: "PC",
          knownFor: "Very popular for computer and IT-focused education.",
          location: "Pune",
          highlights: ["IT focus", "Engineering", "Tech placements"],
        },
        {
          name: "Bharati Vidyapeeth",
          course: "BCA, BBA, Engineering, Medical",
          type: "Private",
          category: "engineering medical management computing",
          icon: "BV",
          knownFor: "Large university known for multiple streams and student diversity.",
          location: "Pune",
          highlights: ["Multiple campuses", "Variety", "Professional courses"],
        },
      ],
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      colleges: [
        {
          name: "IISc Bengaluru",
          course: "Science, Research, Advanced Studies",
          type: "Government",
          category: "engineering computing",
          icon: "IS",
          knownFor: "India's top institute for science and research.",
          location: "Bengaluru",
          highlights: ["Research", "Science", "Top-level education"],
        },
        {
          name: "RV College of Engineering",
          course: "B.Tech, M.Tech",
          type: "Private",
          category: "engineering computing",
          icon: "RV",
          knownFor: "Highly respected engineering college in South India.",
          location: "Mysuru Road, Bengaluru",
          highlights: ["Engineering", "Placements", "Prestige"],
        },
        {
          name: "PES University",
          course: "B.Tech, BCA, MBA",
          type: "Private",
          category: "engineering management computing",
          icon: "PE",
          knownFor: "Strong in computer science, tech, and business programs.",
          location: "Bengaluru",
          highlights: ["CS", "Modern learning", "Industry links"],
        },
        {
          name: "Christ University",
          course: "BCA, BBA, Commerce, Arts",
          type: "Private",
          category: "management computing design",
          icon: "CH",
          knownFor: "Popular for commerce, BCA, and student-friendly campus life.",
          location: "Bengaluru",
          highlights: ["Campus life", "Popular courses", "Good academics"],
        },
        {
          name: "Jain University",
          course: "BCA, BBA, MBA, Design",
          type: "Private",
          category: "management computing design",
          icon: "JU",
          knownFor: "Known for modern programs and a vibrant campus environment.",
          location: "Bengaluru",
          highlights: ["Modern programs", "Creative streams", "Student life"],
        },
      ],
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      colleges: [
        {
          name: "IIT Madras",
          course: "B.Tech, M.Tech, PhD",
          type: "Government",
          category: "engineering computing",
          icon: "IM",
          knownFor: "One of India's best institutes for engineering and research.",
          location: "Chennai",
          highlights: ["Research", "Engineering", "Top placements"],
        },
        {
          name: "Anna University",
          course: "Engineering, Technology, Research",
          type: "Government",
          category: "engineering",
          icon: "AN",
          knownFor: "Major public technical university in Tamil Nadu.",
          location: "Chennai",
          highlights: ["Technical university", "Engineering", "State recognition"],
        },
        {
          name: "SRM Institute of Science and Technology",
          course: "B.Tech, BCA, MBA, Medical",
          type: "Private",
          category: "engineering medical management computing",
          icon: "SR",
          knownFor: "Popular for large campus, tech courses, and strong student intake.",
          location: "Chennai",
          highlights: ["Large campus", "Tech focus", "Wide course options"],
        },
        {
          name: "VIT Chennai",
          course: "B.Tech, BCA, M.Tech",
          type: "Private",
          category: "engineering computing",
          icon: "VC",
          knownFor: "Well-known for technology programs and student opportunities.",
          location: "Chennai",
          highlights: ["Tech education", "Placements", "Modern labs"],
        },
        {
          name: "SSN College of Engineering",
          course: "B.Tech, M.Tech",
          type: "Private",
          category: "engineering",
          icon: "SS",
          knownFor: "Very respected engineering college with strong technical education.",
          location: "Chennai",
          highlights: ["Engineering", "Placements", "Good labs"],
        },
      ],
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      colleges: [
        {
          name: "IIIT Hyderabad",
          course: "B.Tech, M.Tech, Research",
          type: "Government",
          category: "engineering computing",
          icon: "IH",
          knownFor: "Top institute for computer science, AI, and research.",
          location: "Gachibowli, Hyderabad",
          highlights: ["AI", "CS", "Research"],
        },
        {
          name: "University of Hyderabad",
          course: "Arts, Science, Research",
          type: "Government",
          category: "management computing",
          icon: "UH",
          knownFor: "Well-known for research, higher studies, and campus life.",
          location: "Hyderabad",
          highlights: ["Research", "Higher studies", "Campus environment"],
        },
        {
          name: "Osmania University",
          course: "Arts, Commerce, Science, Engineering",
          type: "Government",
          category: "engineering management computing",
          icon: "OS",
          knownFor: "Historic and major public university in Telangana.",
          location: "Hyderabad",
          highlights: ["Legacy", "Wide courses", "Public university"],
        },
        {
          name: "IIT Hyderabad",
          course: "B.Tech, M.Tech, PhD",
          type: "Government",
          category: "engineering computing",
          icon: "IH",
          knownFor: "Fast-growing IIT with strong technology and research output.",
          location: "Kandi, Hyderabad",
          highlights: ["Engineering", "Research", "Modern campus"],
        },
        {
          name: "BITS Pilani Hyderabad",
          course: "B.E., M.E., Research",
          type: "Private",
          category: "engineering computing",
          icon: "BI",
          knownFor: "Premium technical institute with strong industry recognition.",
          location: "Hyderabad",
          highlights: ["Engineering", "Reputation", "Placements"],
        },
      ],
    },
  ];

  const allColleges = campusData.flatMap((cityGroup) =>
    cityGroup.colleges.map((college) => ({
      ...college,
      city: cityGroup.city,
      state: cityGroup.state,
    }))
  );

  const collegeGrid = document.getElementById("collegeGrid");
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const modal = document.getElementById("collegeModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCity = document.getElementById("modalCity");
  const modalCourse = document.getElementById("modalCourse");
  const modalText = document.getElementById("modalText");
  const exploreBtn = document.getElementById("exploreBtn");
  const coursesBtn = document.getElementById("coursesBtn");
  const authModal = document.getElementById("authModal");

const closeAuth = document.getElementById("closeAuth");

const authTabs = document.querySelectorAll(".auth-tab");

const authForms = document.querySelectorAll(".auth-form");

const loginForm = document.getElementById("loginForm");

const signupForm = document.getElementById("signupForm");

  let activeCategory = "all";
  let activeCity = "all";
  let searchQuery = "";

  function ensureCitySection() {
    if (document.getElementById("cityFilters")) return;

    const collegesSection = document.getElementById("colleges");
    if (!collegesSection) return;

    const section = document.createElement("section");
    section.className = "section";
    section.id = "cities";
    section.innerHTML = `
      <div class="section-heading">
        <span>Popular cities</span>
        <h2>Explore by city</h2>
      </div>
      <div class="chip-group" id="cityFilters"></div>
    `;

    collegesSection.parentNode.insertBefore(section, collegesSection);
  }

  function renderCityFilters() {
    const cityFilters = document.getElementById("cityFilters");
    if (!cityFilters) return;

    const cities = ["All", ...campusData.map((item) => item.city)];

    cityFilters.innerHTML = cities
      .map(
        (city, index) => `
          <button class="chip ${index === 0 ? "active" : ""}" data-city="${city.toLowerCase()}">
            ${city}
          </button>
        `
      )
      .join("");
  }

  function renderColleges(list) {
    if (!collegeGrid) return;

    collegeGrid.innerHTML = list
      .map(
        (college, index) => `
          <article class="college-card"
            data-global-index="${allColleges.findIndex(
              (c) => c.name === college.name && c.city === college.city
            )}"
            data-category="${college.category}"
          >
            <div class="card-top">
              <div class="college-icon">${college.icon}</div>
              <div>
                <h3>${college.name}</h3>
                <p>${college.city}</p>
              </div>
            </div>

            <p class="card-desc">${college.knownFor}</p>

            <div class="tag-row">
              <span>${college.course.split(",")[0]}</span>
              <span>${college.type}</span>
              <span>${college.state}</span>
            </div>

            <button class="btn btn-card detailsBtn" type="button">
              View Details
            </button>
          </article>
        `
      )
      .join("");
  }

  function applyFilters() {
    const filtered = allColleges.filter((college) => {
      const matchesCategory =
        activeCategory === "all" || college.category.includes(activeCategory);

      const matchesCity =
        activeCity === "all" || college.city.toLowerCase() === activeCity;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        college.name.toLowerCase().includes(q) ||
        college.city.toLowerCase().includes(q) ||
        college.state.toLowerCase().includes(q) ||
        college.course.toLowerCase().includes(q) ||
        college.knownFor.toLowerCase().includes(q) ||
        college.type.toLowerCase().includes(q);

      return matchesCategory && matchesCity && matchesSearch;
    });

    renderColleges(filtered);
  }

  function openModal(college) {
    if (!college || !modal) return;

    if (modalTitle) modalTitle.textContent = college.name;
    if (modalCity) modalCity.textContent = `📍 ${college.city}, ${college.state}`;
    if (modalCourse) modalCourse.textContent = `🎓 ${college.course}`;

    if (modalText) {
      modalText.innerHTML = `
        <strong>Type:</strong> ${college.type}<br><br>
        <strong>Location:</strong> ${college.location}<br><br>
        <strong>Known for:</strong> ${college.knownFor}<br><br>
        <strong>Highlights:</strong> ${college.highlights.join(", ")}<br><br>
        This is a demo college detail card for your project presentation.
      `;
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeCollegeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  ensureCitySection();
  renderCityFilters();
  renderColleges(allColleges);

  document.getElementById("cityFilters")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;

    document.querySelectorAll("#cityFilters .chip").forEach((chip) => chip.classList.remove("active"));
    btn.classList.add("active");

    activeCity = btn.dataset.city || "all";
    applyFilters();
  });

  document.querySelector(".chip-group")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn || btn.closest("#cityFilters")) return;

    document.querySelectorAll(".chip-group .chip").forEach((chip) => {
      if (!chip.closest("#cityFilters")) chip.classList.remove("active");
    });

    btn.classList.add("active");
    activeCategory = btn.dataset.filter || "all";
    applyFilters();
  });

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchQuery = searchInput.value || "";
      applyFilters();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        searchQuery = searchInput.value || "";
        applyFilters();
      }
    });
  }

  if (collegeGrid) {
    collegeGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".detailsBtn");
      if (!btn) return;

      const card = btn.closest(".college-card");
      if (!card) return;

      const globalIndex = Number(card.dataset.globalIndex);
      const college = allColleges[globalIndex];
      openModal(college);
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", closeCollegeModal);
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeCollegeModal();
  });

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.getElementById("colleges")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (coursesBtn) {
    coursesBtn.addEventListener("click", () => {
      document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (loginBtn && authModal) {

  loginBtn.addEventListener("click", () => {

    authModal.classList.add("show");

    authModal.setAttribute("aria-hidden", "false");

  });

}

if (closeAuth && authModal) {

  closeAuth.addEventListener("click", () => {

    authModal.classList.remove("show");

    authModal.setAttribute("aria-hidden", "true");

  });

}

window.addEventListener("click", (e) => {

  if (e.target === authModal) {

    authModal.classList.remove("show");

    authModal.setAttribute("aria-hidden", "true");

  }

});

window.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && authModal.classList.contains("show")) {

    authModal.classList.remove("show");

    authModal.setAttribute("aria-hidden", "true");

  }

});

authTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    authTabs.forEach((t) => t.classList.remove("active"));

    authForms.forEach((f) => f.classList.remove("active"));

    tab.classList.add("active");

    const targetForm = document.getElementById(tab.dataset.target);

    if (targetForm) targetForm.classList.add("active");

  });

});

if (loginForm) {

  loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();

    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {

      alert("Please fill both email and password.");

      return;

    }

    alert(`Welcome back, ${email}`);

    authModal.classList.remove("show");

  });

}

if (signupForm) {

  signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();

    const email = document.getElementById("signupEmail").value.trim();

    const password = document.getElementById("signupPassword").value.trim();

    const course = document.getElementById("signupCourse").value.trim();

    if (!name || !email || !password || !course) {

      alert("Please fill all fields.");

      return;

    }

    alert(`Account created for ${name}`);

    authModal.classList.remove("show");

  });

}
}); 