// Function to scroll to a particular section when a button with class name ".scrollBtn" and also has an attribute of "data-sectionId"

function scrollToSectionInPage() {

    const allScrollBtns = document.querySelectorAll('.scrollBtn');
    const menuContainer = document.querySelector('.menu-container');
    const toggleBtn = document.querySelector('.menu-icon');

    allScrollBtns.forEach((scrollItem) => {

        const sectionId = scrollItem.getAttribute('data-sectionId');

        scrollItem.addEventListener('click', () => {

            allScrollBtns.forEach((scrollItem) => {
                scrollItem.classList.remove('active');
            });

            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

            scrollItem.classList.add('active');

            if (menuContainer.classList.contains('active')) {

                menuContainer.classList.remove('active');
                toggleBtn.classList.remove('active');
                toggleBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';

            }
            else {
                menuContainer.classList.add('active');
                toggleBtn.classList.add('active');
                toggleBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
            }


        });

    });

}

// function to toggle menu on small devices

function toggleMenuOnMobile() {

    const toggleBtn = document.querySelector('.menu-icon');

    toggleBtn.addEventListener('click', () => {

        const menuContainer = document.querySelector('.menu-container');

        if (toggleBtn.classList.contains('active') && menuContainer.classList.contains('active')) {

            menuContainer.classList.remove('active');
            toggleBtn.classList.remove('active');
            toggleBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';

        }
        else {

            menuContainer.classList.add('active');
            toggleBtn.classList.add('active');
            toggleBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

        }

    });

}

document.addEventListener('DOMContentLoaded', () => {

    scrollToSectionInPage();
    toggleMenuOnMobile();

});

const sendEmail = document.querySelector('.Send')
const sender = document.querySelector('.mail')
const details = document.querySelector('.subject')
const message = document.querySelector('.message')

sendEmail.addEventListener('click', (e) => {
    e.preventDefault()

    const emailAddress = 'igamerryt@gmail.com';
    const subject = `${details.value} ${sender.value}`;
    const body = `${message.value}`;
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the mailto URL
    window.open(mailtoUrl);

});


