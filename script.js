// efek scroll navbar onclick
document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah default link action
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// send message via whatsapp
function sendWhatsApp() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var phone = "+6285157181162"; // Nomor tujuan
    
    if(name === "" || message === "") {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
    }
    
    var url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + 
              encodeURIComponent("Hallo Hafizi, Saya " + name + "👋🏻\n" + message);
    
    window.open(url, "_blank");
}

// efek scrolling
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                el.classList.add("active");
            }
        });
    }

    // Panggil fungsi saat halaman dimuat dan saat di-scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
