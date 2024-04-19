// Sintaks mengganti tema website *light mode dan dark mode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add("dark-mode");
});

document.getElementById("modeSelector").addEventListener("change", function () {
  changeBackground(this.value);
});

function changeBackground(mode) {
  const body = document.body;
  if (mode === "dark") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else if (mode === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
}

// sintaks mengganti bahasa
function changeLanguage(lang) {
  if (lang === "en") {
    document.getElementById("pengenalan").innerText = "Introduction";
    document.getElementById("nama").innerText = "Hello, Iam Hizkia Polii";
    document.getElementById("deskripsi1").innerText =
      "a student currently pursuing my education at Sam Ratulangi University, specifically in the Faculty of Engineering, Department of Electrical Engineering with a focus on Informatics. I am enthusiastic about exploring knowledge and skills in the field of information technology and aspire to make meaningful contributions to the development of technology in the future.";
    document.getElementById("deskripsi2").innerText =
      "This is my first personal homepage, and I am still learning how to create an engaging and structured personal homepage. I am exploring web design knowledge and trying various techniques to make this page more appealing to visitors. In this learning process, I also strive to maintain good structure on the page so that the information I share can be conveyed clearly and easily understood.";
    document.getElementById("Gallery").innerText = "Gallery";
    document.getElementById("link").innerText = "Read More";
    document.getElementById("link2").innerText = "Read More";
    document.getElementById("link3").innerText = "Read More";
    document.getElementById("link4").innerText = "Read More";
    document.getElementById("link5").innerText = "Read More";
    document.getElementById("link6").innerText = "Read More";
    document.getElementById("artikel1").innerText =
      "La liga: Barcelona Won't Be Envious if Kylian Mbappe Joins Real Madrid";
    document.getElementById("artikel2").innerText =
      "Sopulut, Natural Delicacies from North Sulawesi";
    document.getElementById("artikel3").innerText =
      "GTA 6 Finally Appears on Rockstar Games Website, Ready for Release in 2025";
    document.getElementById("artikel4").innerText =
      "Facts About Apple Vision Pro, Check Out Its Sophistication";
    document.getElementById("artikel5").innerText =
      "What Is Cryptocurrency and How Does It Work?";
    document.getElementById("artikel6").innerText =
      "Esports Officially Recognized as a Competitive Sport";
    document.getElementById("kontak").innerText = "Contact Me";
    document.getElementById("sosmed").innerText = "Social Media";
  } else {
    document.getElementById("pengenalan").innerText = "Pengenalan";
    document.getElementById("nama").innerText = "Halo, saya Hizkia Polii";
    document.getElementById("deskripsi1").innerText =
      "seorang mahasiswa yang tengah menempuh pendidikan di Universitas Sam Ratulangi, tepatnya di Fakultas Teknik, Jurusan Elektro dengan program studi Informatika. Saya bersemangat dalam menggali pengetahuan dan keterampilan di bidang teknologi informasi serta berharap dapat memberikan kontribusi yang berarti dalam perkembangan dunia teknologi di masa depan.";
    document.getElementById("deskripsi2").innerText =
      "Ini adalah personal homepage pertama saya, dan saya masih belajar cara membuat personal homepage yang menarik dan terstruktur. Saya sedang menggali pengetahuan tentang desain web dan mencoba berbagai teknik untuk membuat halaman ini lebih menarik bagi pengunjung. Dalam proses pembelajaran ini, saya juga berusaha untuk menjaga agar halaman tersebut terstruktur dengan baik, sehingga informasi yang saya bagikan dapat tersampaikan dengan jelas dan mudah dipahami.";
    document.getElementById("Gallery").innerText = "Galeri";
    document.getElementById("link").innerText = "Baca selengkapnya disini";
    document.getElementById("link2").innerText = "Baca selengkapnya disini";
    document.getElementById("link3").innerText = "Baca selengkapnya disini";
    document.getElementById("link4").innerText = "Baca selengkapnya disini";
    document.getElementById("link5").innerText = "Baca selengkapnya disini";
    document.getElementById("link6").innerText = "Baca selengkapnya disini";
    document.getElementById("artikel1").innerText =
      "La liga: Barcelona Tak Akan Iri jika Kylian Mbappe Gabung Real Madrid";
    document.getElementById("artikel2").innerText =
      "Sopulut, Olahan dari Alam yang Jadi Kuliner Khas Sulawesi Utara";
    document.getElementById("artikel3").innerText =
      "GTA 6 Akhirnya Muncul di Situs Rockstar Games, Siap Rilis 2025";
    document.getElementById("artikel4").innerText =
      "Fakta-fakta Apple Vision Pro, Simak Kecanggihannya";
    document.getElementById("artikel5").innerText =
      "Apa itu Cryptocurrency dan bagaimana cara kerjanya?";
    document.getElementById("artikel6").innerText =
      "Esports Resmi jadi Olahraga Prestasi";
    document.getElementById("kontak").innerText = "Kontak saya";
    document.getElementById("sosmed").innerText = "Media sosial";
  }
}

// sintaks untuk slideshow pada galeri
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
