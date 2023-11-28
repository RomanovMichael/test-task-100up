// modal
const modal = document.getElementById('modal')
if (modal) {
  modal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-title')

    const modalTitle = modal.querySelector('.modal-title')

    modalTitle.textContent = `${recipient ? recipient : 'Обратная связь'}`
  })
}
