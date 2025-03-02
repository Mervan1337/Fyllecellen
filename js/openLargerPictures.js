function openOverlay(img) {
    var overlay = document.querySelector('.overlay');
    var overlayImg = document.getElementById('overlay-img');
    overlayImg.src = img.src;
    overlay.classList.add('active');
  }

  function closeOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
  }