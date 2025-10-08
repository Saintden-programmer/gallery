document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const inputName = document.getElementById("username");
      const inputPass = document.getElementById("password");

      const nameInput = inputName.value.trim();
      const passInput = inputPass.value.trim();

      const correctPassword = "amarahpass"; // ✅ Your one password

      const popup = document.getElementById("popup");
      const welcomeMsg = document.getElementById("welcomeMsg");

      if (passInput === correctPassword && nameInput !== "") {
        const properName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
        welcomeMsg.textContent = `Welcome ${properName}! 😎`;
        popup.style.display = "flex";

        setTimeout(() => {
          popup.style.display = "none";
          window.location.href = "login.html"; // ✅ Go to gallery
        }, 2000);
      } else {
        inputName.classList.add("shake");
        inputPass.classList.add("shake");
        setTimeout(() => {
          inputName.classList.remove("shake");
          inputPass.classList.remove("shake");
        }, 500);

        alert("Incorrect password. 😏");
      }
    });
  }

  // ✅ Show/Hide password functionality
const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

if (showPasswordCheckbox && passwordInput) {
  showPasswordCheckbox.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
  });
}


  // ✅ LIGHTBOX (for gallery page)
  const images = document.querySelectorAll(".image img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (images.length > 0) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }
});
