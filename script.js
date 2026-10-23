// Lightweight interaction for prototype image preview modal
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('prototypeTrigger');
  const modal = document.getElementById('imageModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    trigger.focus();
    document.body.style.overflow = '';
  }

  if (trigger && modal) {
    trigger.addEventListener('click', openModal);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});

