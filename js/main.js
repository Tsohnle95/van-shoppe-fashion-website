//modal
const myModal = document.querySelector(".overlay");
 
const overlay = document.querySelector(".overlay");
  const closeBtn = document.getElementById("close");

  if (overlay) {
    window.addEventListener("load", () => {
      setTimeout(() => overlay.style.display = "block", 2000);
    });
    closeBtn.addEventListener("click", () => overlay.style.display = "none");
  }

//accordion
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.stopPropagation();
          
          this.nextElementSibling.classList.toggle('expanded');
        });
      });