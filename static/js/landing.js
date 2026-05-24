var modal = document.getElementById('videoModal');
var frame = document.getElementById('videoFrame');
var watchBtn = document.getElementById('watchBtn');
var closeBtn = document.getElementById('modalClose');

function openModal() {
    frame.src = frame.dataset.src;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    frame.src = '';
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

watchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});
