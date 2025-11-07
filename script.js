const display = document.getElementById('display');
const clearBtn = document.querySelector('button[onclick="ClearDisplay()"]'); // دکمه‌ی C


//append to display function
function appendToDisplay (arg){
    display.value += arg;
}

//calculate function
function calculate(){
    try{
        display.value = eval (display.value);

    }catch (e){
        display.value = "Error";
    }
}

//clear function
function ClearDisplay(){
    display.value = display.value.slice(0, -1);//slice(0, 01) to remove last character of an string
}

// زمان شروع فشار دکمه
let pressTimer;

clearBtn.addEventListener('mousedown', () => {
  // وقتی کاربر دکمه رو نگه می‌داره
  pressTimer = setTimeout(() => {
    display.value = ''; // حذف کامل محتوا
  }, 600); // اگه بیشتر از 0.6 ثانیه نگه داره، کلش پاک شه
});

clearBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer); // اگر سریع ول کرد، فقط حذف یک کاراکتر
});

clearBtn.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer); // اگر دستش رو از دکمه برداشت، تایمر کنسل شه
});
