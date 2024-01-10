$(document).ready(function () {

    $('#c0').hover(function () {
        if ($(this).hasClass("active")) {
            $('#c0 .bott').slideUp(function () {
                $('#c0 ').removeClass("active");
            });
        }
        else {
            $('#c0 ').addClass("active");
            $('#c0 .bott').stop().slideDown();
        }
    });
    
    $('#c1').hover(function () {
        if ($(this).hasClass("active")) {
            $('#c1 .bott').slideUp(function () {
                $('#c1 ').removeClass("active");
            });
        }
        else {
            $('#c1 ').addClass("active");
            $('#c1 .bott').stop().slideDown();
        }
    });

    $('#c2').hover(function () {
        if ($(this).hasClass("active")) {
            $('#c2 .bott').slideUp(function () {
                $('#c2 ').removeClass("active");
            });
        }
        else {
            $('#c2 ').addClass("active");
            $('#c2 .bott').stop().slideDown();
        }
    });

    $('#c3').hover(function () {
        if ($(this).hasClass("active")) {
            $('#c3 .bott').slideUp(function () {
                $('#c3').removeClass("active");
            });
        }
        else {
            $('#c3 ').addClass("active");
            $('#c3 .bott').stop().slideDown();
        }
    });


    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer !", "Programmer !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer !", "Programmer !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   

    
    
   


});


// ----------------------  for sending messeges ---------------------


function func(){

    swal("Download", "Certificate Downloaded Successfully", "success");
}


function sendmail() {

    var name = $('#Name').val();
    var email = $('#Email').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "portfolio273@gmail.com",
        Password: "624B386D0C198599B8D94B768D3AF583D714",
        To: 'rahulteli2005@gmail.com',
        From: 'portfolio273@gmail.com',
        Subject: "New message on contact from " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);    
            if (message == 'OK') {
                console.log("Success")
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        }
    );



}

//-------------------- aos -------------- >
AOS.init();








