const clock = document.getElementById('clock');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');


setInterval(() =>{
    const dt = new Date();
    hour.innerHTML = dt.getHours();
    minute.innerHTML = dt.getMinutes();
    second.innerHTML = dt.getSeconds();

} , 1000);

document.querySelector('.today-date').innerHTML = getTodayDate();
const joinPeaky = () => {
    let userName = prompt('enter your name please , sir/madam : ');
    alert('welcome to PEAKY BLINDERS , ' + userName);
}