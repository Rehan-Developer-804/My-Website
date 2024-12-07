const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Tiktoker";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Content Writer";
    }, 12000); 
    setTimeout(() => {
        text.textContent = "Video Editor";
    }, 16000);
    setTimeout(() => {
        text.textContent = "Logo Designer";
    }, 20000);
    setTimeout(() => {
        text.textContent = "Digital Marketing";
    }, 24000);
}

textLoad();
setInterval(textLoad, 24000);  // Adjusted to 24000ms to match the total duration

// Contact From

const submit = document.querySelector(".submit");
submit.addEventListener("click", function() {
    const email = document.querySelector(".email");
    const nam = document.querySelector(".name");
    const phone = document.querySelector(".phone");
    const err = document.querySelector(".err");
    if (email.value === "" || nam.value === "" || phone.value === "") {
        err.style.color = "red";
        err.style.weight = "700";
        err.innerHTML = "Please Fill The Follwing For Message"
    } else {
        email.value = "";
        nam.value = "";
        err.style.color = "white";
        phone.value = "";
        err.innerHTML = "Send Massage for Contact Us";
    }
});

const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

function closeSidebar() {
    sidebar.style.left = "-250px";
}
