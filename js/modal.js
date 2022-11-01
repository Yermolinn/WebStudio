(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();




<div class="backdrop is-hidden">
        <div class="modal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis eaque doloremque veniam, architecto quasi nam quas, explicabo aliquid cum consequatur dicta et officiis quia voluptatibus 
            dolorum esse sint quidem pariatur assumenda, eum corporis nostrum eius! Modi exercitationem accusantium nihil odio assumenda, quibusdam dolor eligendi eius veniam. Quisquam, quia ducimus?
          </p>
          <button class="btn-esc" type="button">
            <svg>
              <use xlink:href="./image/symbol-defs.svg#icon-btn-esc"></use>
            </svg>
          </button>
        </div>
      </div>