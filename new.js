const projectNames = [
  "Cat Photo App", "Cafe Menu", "Colored Markers", "Registration Form",
  "Anime Survey", "Rothko Painting", "Photo Gallery", "Nutrition Label",
  "Accessibility Quiz", "Tribute Page", "Balance Sheet", "FCC Cat Painting",
  "Piano", "Technical Documentation", "City Skyline", "Magazine",
  "Product Landing Page", "Ferris Wheel"
];

const projectImages = [
  "pic/codeman.jpg","cafe.jpg","markers.jpg","registration.jpg","anime.jpg",
  "rothko.jpg","gallery.jpg","nutrition.jpg","quiz.jpg","tribute.jpg",
  "balance.jpg","fcccat.jpg","piano.jpg","techdoc.jpg","skyline.jpg",
  "magazine.jpg","product.jpg","ferris.jpg"
];

const projectLinks = [
  "https://gabucay.github.io/port/CatPhotoApp.html","CafeMenu.html","colored_markers.html","Registration_form.html",
  "SURVEY_FORM.html","Rothko Painting.html","PhotoGallery.html","NutritionLabel.html",
  "AccessibilityQuiz.html","BuildaTributePage.html","BalanceSheet.html","fCCCatPainting.html",
  "Piano.html","TechnicalDocumentation.html","CitySkyline.html","Magazine.html",
  "ProductLandingPage.html","FerrisWheel.html"
];

const content = document.getElementById("content");

function showContent(tab) {
  if(tab === "about") {
    content.innerHTML = `
      <section id="about">
        <h2>About Me</h2>
        <div class="card about-card">
          <img src="profile.jpg" alt="My Picture">
          <div>
            <h3>Jefferson A. Gabucay</h3>
            <p>BSIT Student | Learning Web Development (HTML, CSS, JS)</p>
            <p>Always eager to explore and improve my coding skills.</p>
          </div>
        </div>
      </section>
    `;
  } else if(tab === "projects") {
    content.innerHTML = `
      <section id="projects">
        <h2>Projects</h2>
        <div class="project-grid" id="project-container"></div>
      </section>
    `;
    const container = document.getElementById("project-container");
    for(let i=0; i < projectNames.length; i++) {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <a href="${projectLinks[i]}" target="_blank">
          <img src="${projectImages[i]}" alt="${projectNames[i]}">
          <h3>${projectNames[i]}</h3>
        </a>
      `;
      container.appendChild(card);
    }
  } else if(tab === "certificate") {
    content.innerHTML = `
      <section id="certificate">
        <h2>Certificates</h2>
        <div class="card">
          <h3>Web Development Certificate</h3>
          <img src="certificate.jpg" alt="Certificate" style="width:100%; border-radius:8px; margin-top:10px;">
          <p>Certified in HTML, CSS, and JavaScript fundamentals.</p>
        </div>
      </section>
    `;
  } else if(tab === "contact") {
    content.innerHTML = `
      <section id="contact">
        <h2>Contact Me</h2>
        <div class="card">
          <p><strong>Email:</strong> youremail@example.com</p>
          <p><strong>Phone:</strong> +63 9XX XXX XXXX</p>
          <p><strong>Address:</strong> Cebu City, Philippines</p>
        </div>
      </section>
    `;
  }
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("mode-btn");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

}
