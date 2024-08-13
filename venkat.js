function yesClicked() {
    document.getElementById('message').textContent = 'i hope you have enjoyed your last teen year happily.,May your 20th birthday be surrounded by your beloved people,happy  birthday Harshitha. ';
    document.getElementById('noButton').style.display = 'none';
}

function noClicked() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
  
    const containerRect = container.getBoundingClientRect();
    
   
    const buttonRect = noButton.getBoundingClientRect();
    

    const maxX = containerRect.width - buttonRect.width - 20; 
    const maxY = containerRect.height - buttonRect.height - 20; 

    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

