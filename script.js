const succesAudio = new Audio("success.mp3");
const slowSad = new Audio("slowsad.wav");
const errorMsg = new Audio("error.mp3");

document.addEventListener('keydown', (e) =>{
    if(e.key === "Enter") {
        checkPalindromeButton();
    }
});

const toast = (text, background, color) => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


const checkPalindromeButton = () => {
    if (palindromeInput.value === "") {
        errorMsg.play();
        toast("Please enter a word or phrase to check! ✍️", "red", "white")
    } else {
        let reverseStr = palindromeInput.value.trim().toLowerCase()
        let newStr = reverseStr.split("").reverse().join("")
        console.log(newStr);

        sub.innerHTML = `      
    <div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    </div>
            `
        setTimeout(() => {
            if (newStr === reverseStr) {
                succesAudio.play();
                show.innerHTML = ""
                show.innerHTML = `
        <p>Yes! Its a palindrome 😍</p>
        `
            } else {
                slowSad.play();
                show.innerHTML = ""
                show.innerHTML = `
        <p>Nope! Not a palindrome 💔</p>
        `
            }
            setTimeout(() => {
                palindromeInput.value = ""
                show.innerHTML = `<p>Your result will show here 😇🤩😇</p>`
            }, 4000)
            sub.innerHTML = `
                     <span>Check</span>
        `
        }, 2500);

    }

}


//  return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);