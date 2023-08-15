function scrolling(elem, width) {
  setTimeout(() => {
    window.scrollBy({
      top: 20000000,
      behavior: "smooth",
    });
  }, 20);
}

export default scrolling;
