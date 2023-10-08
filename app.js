console.log("I see you")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString('en-us', { year:"numeric", month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric"});
}
const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = getCurrentDateAndTime();