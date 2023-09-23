const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

