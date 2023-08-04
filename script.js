let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    if (window.innerWidth <= 767) {
      navbar.classList.add("dark-mode");
    }
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    navbar.classList.remove("dark-mode");
  }
};

function downloadResume() {
  // Replace 'resume.pdf' with the actual path to your resume PDF file
  const resumeFile = 'resume.pdf';
  const link = document.createElement('a');
  link.href = resumeFile;
  link.download = 'Ramuresume.pdf'; // Change the name of the downloaded file if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach the click event listener to the "Download Cv" button
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', downloadResume);
