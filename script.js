//Customers count
const counters= document.querySelectorAll('.counter');

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 200;
        const inc = target/speed;

        if(count < target){
            counter.innerText =Math.ceil(count +inc);
            setTimeout(updateCount, 10);
        }else{
            counter.innerText = target;
        }
    };
    updateCount();
})

//Whatsapp Message Automation
function sendToWhatsApp(){
    const phoneNumber = "2348136536335";

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    const finalMessage =
    `Hello Ruach H. fashion , \n\n`+ 
    `My name is: ${name}\n` +
    `My email is: ${email}\n` + 
    `Inquiry: ${message}`;

    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if(name && email && message){
        window.open(whatsappURL, '_blank');
    }else{
        alert("Please fill in all fields before sending.");
    }
}

//Animation on scroll
function checkVisibility(){
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach(el =>{
        const elementTop =el.getBoundingClientRect().top;
        const elementVisible =150;
        if(elementTop < window.innerHeight - elementVisible){
            el.classList.add('visible');
        }
    });
}
//Adding scroll listener
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

const mobilebtn = document.querySelector('.mobilebtn');
const navLinks = document.querySelector('.navlinks');
const menuIcons = document.querySelector('.mobilebtn i');

mobilebtn.addEventListener('click', () =>{
    const isVisible = navLinks.style.display === 'flex';
    
    if(isVisible){
        navLinks.style.display = "none";
        menuIcons.classList.remove('fa-xmark');
        menuIcons.classList.add('fa-bars');
    }else{
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.zIndex = '1000';

        menuIcons.classList.remove('fa-bars');
        menuIcons.classList.add('fa-xmark');
    }
})
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navLinks.style.display = "none";
        menuIcons.classList.remove('fa-xmark');
        menuIcons.classList.add('fa-bars');
    });
});
