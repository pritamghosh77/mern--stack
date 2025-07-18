
       
        const pictures = document.querySelectorAll('.pictures img');
        const displayImg = document.getElementById('displayImg');
        pictures.forEach(img => {
            img.addEventListener('click', function() {
                pictures.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                displayImg.src = this.src;
                displayImg.alt = this.alt;
            });
        });
        
        pictures[0].classList.add('selected');

        
        const colors = document.querySelectorAll('.color-box');
        const displaySection = document.getElementById('displaySection');
        colors.forEach(box => {
            box.addEventListener('click', function() {
                colors.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                displaySection.style.background = this.dataset.color;
            });
        });
   