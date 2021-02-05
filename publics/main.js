var submitBtn = document.getElementById('submitBtn');
const getInfo = (event) => {
    event.preventDefault();
    console.log("clicked");
}
submitBtn.addEventListener('click',getInfo);
console.log("hello");