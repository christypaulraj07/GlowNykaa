
const makeupKeywords = [
    "Search for Matte Lipsticks...",
    "Search for Full Coverage Foundations...",
    "Search for Waterproof Eyeliners...",
    "Search for Hydrating Lip Glosses..."
];
const skincareKeywords = [
    "Search for hydrating cleansers...",
    "Search for Vitamin C glowing serums...",
    "Search for SPF 50 gel sunscreens...",
    "Search for Salicylic acid face wash..."
];

const searchKeywords = document.body.dataset.page === "skincare" ? skincareKeywords : makeupKeywords;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriterPlaceholder");

function handleTypewriter() {
    if (!typewriterEl) return;
    const currentWord = searchKeywords[wordIndex];
    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % searchKeywords.length;
        typeSpeed = 400;
    }

    setTimeout(handleTypewriter, typeSpeed);
}
handleTypewriter();


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const offer = document.getElementById("slideOfferBox");
        if (offer) offer.classList.add("active");
    }, 1500);
});

function dismissOffer() {
    document.getElementById("slideOfferBox").classList.remove("active");
}


function openProductDetail(title, price, imgSrc, desc) {
    document.getElementById("detailTitle").innerText = title;
    document.getElementById("detailPrice").innerText = price;
    document.getElementById("detailImg").src = imgSrc;
    document.getElementById("detailDesc").innerText = desc;
    document.getElementById("productDetailPopup").classList.add("open");
}

function closeProductPopup() {
    document.getElementById("productDetailPopup").classList.remove("open");
}

function closePopupOnBg(e) {
    if (e.target.id === "productDetailPopup") {
        closeProductPopup();
    }
}
