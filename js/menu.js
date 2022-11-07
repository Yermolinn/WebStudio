// (() => {
//     const menuBtnRef = document.querySelector("[menu-open-btn]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
  
//     menuBtnRef.addEventListener("click", () => {
//       const expanded =
//         menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
//       menuBtnRef.classList.toggle("is-open");
//       menuBtnRef.setAttribute("aria-expanded", !expanded);
  
//       mobileMenuRef.classList.toggle("is-open");
//     });
//   })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelector('[menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();