function showImageList() {
    const imageList = document.getElementById('imageList');
    imageList.style.display = 'flex';
}

function selectImage(imageSrc) {
    const addAvatarCircle = document.querySelector('.add-avatar-circle');
    const imageList = document.getElementById('imageList');

    // Set the background of the circle to the selected image
    addAvatarCircle.style.backgroundImage = `url(${imageSrc})`;
    addAvatarCircle.style.backgroundSize = '100% 100%';

    // Clear the inner text of the circle
    addAvatarCircle.innerText = '';

    // Hide the image list
    imageList.style.display = 'none';

    // Adding a 'selected' class to the selected avatar
    const selectedAvatar = document.querySelector('.image-list img[src="' + imageSrc + '"]');
    if (selectedAvatar) {
        selectedAvatar.classList.add('selected');
    }
}


function isAvatarSelected() {
    var selectedAvatar = document.querySelector('.image-list img.selected');
    return selectedAvatar !== null;
}

// Function to display error message for missing avatar
function displayAvatarError() {
    var avatarError = document.getElementById('avatarError');
    avatarError.style.display = 'block';
    secondPart.style.display = 'none'

    setTimeout(() => {
        avatarError.style.display = 'none';
    }, 3000); // Adjust the duration as needed
}

// Function to reset error messages
function resetErrorMessages() {
    document.getElementById('avatarError').style.display = 'none';
}

function calculateLove() {
    let addLove = document.getElementById("addLove");
    let cont = document.getElementById("cont");
    let cards = document.getElementById("cards");
   
    const person1Input = document.getElementById('person1');
    const person2Input = document.getElementById('person2');
    

    const person1Value = person1Input.value.trim();
    const person2Value = person2Input.value.trim();


    // Reset error messages
    resetErrorMessages();

    if (person1Value === '' && person2Value === ''){
        addLove.style.display = 'block';
        secondPart.style.display = 'none';
        setTimeout(() => {
            addLove.style.display = 'none';
        }, 8000);
    } else {
        const selectedAvatar = document.querySelector('.image-list img.selected');
        if (!selectedAvatar) {
            // Display avatar error message
            displayAvatarError();
            return;
        }

        cont.style.display = 'block';
        setTimeout(() => {
            cont.style.display = 'none';

            // After 0.2 seconds, show "cards" element
            setTimeout(() => {
                cards.style.display = 'block';
            }, 200);
            document.getElementById('mainContainer').classList.add('result-displayed');
        }, 3000);

        var person1 = person1Input.value.toUpperCase();
        var person2 = person2Input.value.toUpperCase();

        // Generate random love score between 1 and 100
        var loveScore = Math.round(Math.random() * 99) + 1;

        var resultMessages;
        if (loveScore >= 1 && loveScore <= 20) {
            resultMessages = "Not compatible. 😔";
        } else if (loveScore >= 21 && loveScore <= 40) {
            resultMessages = "Go and pray about it. 🙏";
        } else if (loveScore >= 41 && loveScore <= 69) {
            resultMessages = "You can manage each other. 😊";
        } else {
            resultMessages = "Congratulations, you have found your soulmate! 💑";
        }

        // Display the result
        var resultMessage = person1 + ' and ' + person2 + ' have a love score of ' + loveScore + '%!';
        document.getElementById('love-result').innerHTML = resultMessage;
        document.getElementById('messageContainer').innerHTML = resultMessages;
    }
}

function resetLoveCalculator() {
    // Reset input fields
    document.getElementById('person1').value = '';
    document.getElementById('person2').value = '';

    // reset selected Avatar
    const selectedAvatar = document.querySelector('.image-list img.selected');
    if (selectedAvatar) {
        selectedAvatar.classList.remove('selected');
    }

    // Hide result card
    document.getElementById('cards').style.display = 'none';
    cards.style.display = 'none'
    document.getElementById('mainContainer').classList.remove('result-displayed');

    resetErrorMessages();
}
