//audio
function playSound() {
    var audio = new Audio('neat/clap.wav');
    audio.play();
    // stop the audio after 5 sec
    setTimeout(function() {
        audio.pause();
    }, 5000);
}
document.addEventListener('DOMContentLoaded', function() {
    // input in the second column
    var inputFields = document.querySelectorAll('tr:nth-child(n+2) td:nth-child(2) input[type="text"]');

inputFields.forEach(function(inputField) {
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // creates a bullet points
        var listItem = document.createElement('li');
        listItem.textContent = inputField.value;
        
        // clear the input 
        inputField.value = '';
        
        // makes bullet point and then place on the same cell
        var ul = inputField.parentElement.querySelector('ul');
        if (!ul) {
            ul = document.createElement('ul');
            inputField.parentElement.appendChild(ul);
        }
        ul.appendChild(listItem);
    }
});
}); 
});