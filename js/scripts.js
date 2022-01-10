/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

$(document).ready(function () {
    // alert("굿뉴스코 총동문회 홈페이지 접속 완료");
    var adminID = "admin";
    var adminPW = "admin";

    $("#registerButton").click(function () {
        alert("HI");
        var ID = $("#ID").val();
        var PW = $("#password1").val();
        var PW2 = $("#password2").val();
        var Name = $("#name").val();
        var Birthday = $("#birthday").val();
        var Class = $("#class").val();
        var Country = $("#country").val();
        var Region = $("#region").val();
        var Message = $("#message").val();

        alert("회원가입 요청: " + ID + " " + PW + " " + PW2 + " " + Name + " " + Birthday + " " + Class + " " + Country + " " + Region + " " + Message + " ");
    })

    var adminID = "admin";
    var adminPW = "admin";
    $("#btnLogin").click(function () {
        var uID = $("#userId").val();
        var uPW = $("#passwd").val();
        if (!uID || !uPW) {
            alert("Enter Login Credentials");
        } else {
            if (uID == adminID) {
                if (uPW == adminPW) {
                    alert("Login Successful... Let me guide you to the GNCAA Comm.");
                   
                    window.location.href = "../FunProject/src/community.html";
                } else {
                    console.log("Incorrect PW");
                    alert("Incorrect Credential.");
                    saveLogin("");
                }
            } else {
                console.log("Incorrect ID");
                alert("Incorrect Credential.");
            }
        }
    })
})

