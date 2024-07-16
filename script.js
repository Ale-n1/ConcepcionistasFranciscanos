document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const body = document.body;
    const readMoreBtns = document.querySelectorAll('.read-more');
    const moreContents = document.querySelectorAll('.more-content');

    toggleThemeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    readMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const moreContent = moreContents[index];
            moreContent.style.display = moreContent.style.display === 'none' || moreContent.style.display === '' ? 'block' : 'none';
            btn.textContent = moreContent.style.display === 'block' ? 'Leer menos' : 'Leer más';
        });
    });

    // Initialize visit count
    const visitCountDisplay = document.getElementById('visit-count');
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountDisplay.textContent = visitCount;
});
