var result_screen = document.getElementById("input-screen");
var buttons = document.querySelectorAll('button');
var buttonText = "";
var result = "";
for (button of buttons) {
    button.addEventListener('click', function(event) {
        buttonText = event.target.innerHTML;

        if (buttonText == "C") {
            result = "";
            result_screen.value = "";
        } else if (buttonText == "X") {
            result = result + '*';
            result_screen.value = result;
        } else if (buttonText == "=") {
            result_screen.value = eval(result);
            result = "";
        } else {
            result = result + buttonText;
            result_screen.value = result;
        }

    })
}