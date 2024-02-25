    document.getElementById('menu-icon').onclick = function () {
        var nav = document.querySelector('nav');
        nav.style.display = nav.style.display === 'none' || nav.style.display === '' ? 'flex' : 'none';
    };

    function toggleInfo() {
        var infoContent = document.getElementById("infoContent");
        infoContent.style.display = (infoContent.style.display === "block") ? "none" : "block";
      }

      function toggleInfo2() {
        var infoContent = document.getElementById("infoContent2");
        infoContent.style.display = (infoContent.style.display === "block") ? "none" : "block";
      }
      
      const slider = document.getElementById('slider');
      const prevButton = document.getElementById('prev');
      const nextButton = document.getElementById('next');
  
      let currentIndex = 0;
  
      nextButton.addEventListener('click', () => {
          if (currentIndex < slider.children.length - 1) {
              currentIndex++;
          } else {
              currentIndex = 0;
          }
          updateSlider();
      });
  
      prevButton.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
          } else {
              currentIndex = slider.children.length - 1;
          }
          updateSlider();
      });
  
      function updateSlider() {
          const translateValue = -currentIndex * 100 + '%';
          slider.style.transform = 'translateX(' + translateValue + ')';
      }