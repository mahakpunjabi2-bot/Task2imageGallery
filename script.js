function filterSelection(category) {
      let cards = document.querySelectorAll(".image-card");

      cards.forEach(card => {
        card.style.display = "none";
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block"; 
        }
      });
    }

    window.onload = function() {
      filterSelection("all");
    };