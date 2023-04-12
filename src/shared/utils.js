export const useScrollToBottom = (smooth = true) => {
  const area = document.getElementById("chat-area");
  // area.scrollTo(0,area.scrollHeight);
  smooth
    ? area.scrollTo({
        left: 0,
        top: area.scrollHeight,
        behavior: "smooth",
      })
    : area.scrollTo({
        left: 0,
        top: area.scrollHeight,
      });
};

export const useScrollToTop = () => {
  const area = document.getElementById("chat-area");
  area.scrollTop = 0; // For Safari
  area.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export const useShowAndHideScrollTopButton = () => {
  const area = document.getElementById("chat-area");
  const myButton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  document.getElementById("chat-area").onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (area.scrollTop > 20 || area.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
};
