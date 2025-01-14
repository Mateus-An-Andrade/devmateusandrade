document.addEventListener("DOMContentLoaded", (load) =>{
    console.log("DOM Fully load and parsed")
});

document.getElementById('about_me_button').addEventListener('click', function() {
    window.location.hash = 'about_me';
    document.getElementById('about_me').scrollIntoView();
});

document.getElementById('skills_button').addEventListener('click', function(){
    window.location.hash = 'skills';
    document.getElementById('skills').scrollIntoView();
})
