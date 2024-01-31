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
}

function calculateLove() {
    let addLove = document.getElementById("addLove");
    let cont = document.getElementById("cont");
    let cards = document.getElementById("cards");
    let person1Input = document.getElementById('person1');
    let person2Input = document.getElementById('person2');

    if (person1Input.value === '' || person2Input.value === ''){
        addLove.style.display = 'block';
        secondPart.style.display = 'none';
        setTimeout(() => {
            addLove.style.display = 'none';
        }, 5000);
    } else {
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

