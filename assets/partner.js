
    document.addEventListener("DOMContentLoaded", function() {
        const partnerURL = "https://sendmypingto.com/?s=125&ref=wp_w1613p1814_cwef";
        document.querySelectorAll(".partner-link, .partner-link-btn").forEach(el => {
            el.addEventListener("click", function(e){
                e.preventDefault();
                window.open(partnerURL, "_blank");
            });
        });
    });
    