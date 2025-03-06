document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const secondDiv = document.getElementById("secondDiv");
  const scrollLeftButton = document.getElementById("scrollLeft");
  const scrollRightButton = document.getElementById("scrollRight");
  const buttons = document.querySelectorAll("#firstDiv button");
  let scrollAmount = 0;

  scrollLeftButton.addEventListener("click", function () {
    scrollAmount -= 320;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    secondDiv.style.transform = `translateX(-${scrollAmount}px)`;
  });

  scrollRightButton.addEventListener("click", function () {
    const maxScroll = secondDiv.scrollWidth - scrollContainer.clientWidth;
    scrollAmount += 350;
    if (scrollAmount > maxScroll) {
      scrollAmount = maxScroll;
    }
    secondDiv.style.transform = `translateX(-${scrollAmount}px)`;
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.removeAttribute("id"));
      this.setAttribute("id", "active");
    });
  });

  // Touch-based scrolling
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  scrollContainer.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("touchend", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  // Touch-based scrolling for Section 2
  const scrollContainer2 = document.getElementById("scrollContainer2");
  const secondDiv2 = document.getElementById("secondDiv2");
  const scrollLeftButton2 = document.getElementById("scrollLeft2");
  const scrollRightButton2 = document.getElementById("scrollRight2");
  let scrollAmount2 = 0;

  scrollLeftButton2.addEventListener("click", function () {
    scrollAmount2 -= 400; // Adjust this value based on the width of your boxes
    if (scrollAmount2 < 0) {
      scrollAmount2 = 0;
    }
    secondDiv2.style.transform = `translateX(-${scrollAmount2}px)`;
  });

  scrollRightButton2.addEventListener("click", function () {
    const maxScroll2 = secondDiv2.scrollWidth - scrollContainer2.clientWidth;
    scrollAmount2 += 350; // Adjust this value based on the width of your boxes
    if (scrollAmount2 > maxScroll2) {
      scrollAmount2 = maxScroll2;
    }
    secondDiv2.style.transform = `translateX(-${scrollAmount2}px)`;
  });

  scrollContainer2.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer2.classList.add("active");
    startX = e.pageX - scrollContainer2.offsetLeft;
    scrollLeft = scrollContainer2.scrollLeft;
  });

  scrollContainer2.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer2.classList.remove("active");
  });

  scrollContainer2.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer2.classList.remove("active");
  });

  scrollContainer2.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer2.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer2.scrollLeft = scrollLeft - walk;
  });

  scrollContainer2.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer2.offsetLeft;
    scrollLeft = scrollContainer2.scrollLeft;
  });

  scrollContainer2.addEventListener("touchend", () => {
    isDown = false;
  });

  scrollContainer2.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollContainer2.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer2.scrollLeft = scrollLeft - walk;
  });

  

  // Touch-based scrolling for Section 5
  const scrollContainer5 = document.getElementById("scrollContainer5");
  const secondDiv5 = document.getElementById("secondDiv5");
  const scrollLeftButton5 = document.getElementById("scrollLeft5");
  const scrollRightButton5 = document.getElementById("scrollRight5");
  let scrollAmount5 = 0;

  scrollLeftButton5.addEventListener("click", function () {
    scrollAmount5 -= 350; // Adjust this value based on the width of your boxes
    if (scrollAmount5 < 0) {
      scrollAmount5 = 0;
    }
    secondDiv5.style.transform = `translateX(-${scrollAmount5}px)`;
  });

  scrollRightButton5.addEventListener("click", function () {
    const maxScroll5 = secondDiv5.scrollWidth - scrollContainer5.clientWidth;
    scrollAmount5 += 350; // Adjust this value based on the width of your boxes
    if (scrollAmount5 > maxScroll5) {
      scrollAmount5 = maxScroll5;
    }
    secondDiv5.style.transform = `translateX(-${scrollAmount5}px)`;
  });

  scrollContainer5.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer5.classList.add("active");
    startX = e.pageX - scrollContainer5.offsetLeft;
    scrollLeft = scrollContainer5.scrollLeft;
  });

  scrollContainer5.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer5.classList.remove("active");
  });

  scrollContainer5.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer5.classList.remove("active");
  });

  scrollContainer5.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer5.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer5.scrollLeft = scrollLeft - walk;
  });

  scrollContainer5.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer5.offsetLeft;
    scrollLeft = scrollContainer5.scrollLeft;
  });

  scrollContainer5.addEventListener("touchend", () => {
    isDown = false;
  });

  scrollContainer5.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollContainer5.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainer5.scrollLeft = scrollLeft - walk;
  });
});
