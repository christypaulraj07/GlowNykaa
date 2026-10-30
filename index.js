
const searchKeywords = [
    "Search for brands, products, lipstick...",
    "Search for The Ordinary Serums...",
    "Search for Fit Me Foundations...",
    "Search for Mars Eyeconic Eyeliner..."
];
let wordIdx = 0;
let letterIdx = 0;
let isDeleting = false;
const textElement = document.getElementById("animatedPlaceholder");

function loopTyping() {
    const currentWord = searchKeywords[wordIdx];
    if (isDeleting) {
        textElement.innerText = currentWord.substring(0, letterIdx - 1);
        letterIdx--;
    } else {
        textElement.innerText = currentWord.substring(0, letterIdx + 1);
        letterIdx++;
    }

    let speed = isDeleting ? 30 : 70;

    if (!isDeleting && letterIdx === currentWord.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && letterIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % searchKeywords.length;
        speed = 350;
    }

    setTimeout(loopTyping, speed);
}
loopTyping();


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("slideOfferBox").classList.add("show");
    }, 1500);
});

function closeOfferBanner() {
    document.getElementById("slideOfferBox").classList.remove("show");
}

function showProductDetails(title, brand, price, imgSrc, desc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBrand").innerText = brand;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalProductImg").src = imgSrc;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("productPreviewModal").classList.add("active");
}

function closeModal() {
    document.getElementById("productPreviewModal").classList.remove("active");
}

function closeModalOnBg(e) {
    if (e.target.id === "productPreviewModal") {
        closeModal();
    }
}

let cartCount = 0;

function addToCartNotify() {
    cartCount++;
    document.getElementById("cartBadge").innerText = cartCount;

    const toast = document.getElementById("cartToast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}
