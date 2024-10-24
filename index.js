//Get all the icons
const icon_one = document.getElementById('icon-one');
const icon_two = document.getElementById('icon-two');
const icon_three = document.getElementById('icon-three');
const icon_four = document.getElementById('icon-four');

//Add click event listener to all the icons
icon_one.addEventListener('click', handleClick);
icon_two.addEventListener('click', handleClick);
icon_three.addEventListener('click', handleClick);
icon_four.addEventListener('click', handleClick);

//Accordion function
function handleClick(event) {

    const icon = document.getElementById(event.target.id);
    console.log(icon.getAttribute('class'))
    console.log(icon.classList[0]);
    if (icon.classList.contains('plus-icon')) {
        const answer = document.getElementsByClassName(icon.classList[0])[1]
        answer.classList.remove('class', 'vanish-content');
        icon.setAttribute('src', './assets/images/icon-minus.svg')
        icon.classList.remove('plus-icon')
        icon.classList.add('minus-icon')
    }
    else {
        const answer = document.getElementsByClassName(icon.classList[0])[1]
        answer.classList.add('class', 'vanish-content');
        icon.setAttribute('src', './assets/images/icon-plus.svg')
        icon.classList.remove('minus-icon')
        icon.classList.add('plus-icon')
    }

}