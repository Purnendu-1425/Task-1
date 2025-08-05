document.getElementById('alertButton').addEventListener('click', function () {
    alert('Welcome to interactive web development! 🚀');

    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});
