//while
var i = 0; 
var msg = '';
var demo = document.getElementById('demo')

while(i <= 10){
    msg += i + ' x 5 = ' +(i*5) + '<br>';
    i++;
}

demo.innerHTML = msg;

//do-while
do{
    msg += i + ' x 5 = ' +(i*5) + '<br>';
    i++;
} while(i <= 10);
demo.innerHTML = msg;