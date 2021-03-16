let pause = document.querySelector('.stop');
let slider = {
    slides: ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg'],
    frame: 0,//начальный кадр
    set: function (image) {
        document.getElementById('src').style.backgroundImage = 'url(' + image + ')';
    },
    init: function () { //запуск с начальной картинки
        this.set(this.slides[this.frame]);
    },
    left: function () {
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.slides.length - 1;
        }
        this.set(this.slides[this.frame]);
    },
    right: function () {
        this.frame++;
        if (this.frame === this.slides.length) {
            this.frame = 0;
        }
        this.set(this.slides[this.frame]);
    }
};
window.onload = function () {//запуск сдайдера после загрузки
    slider.init();
    setInterval(function () {
        slider.right();
    }, 5000);
   /* if(stop.onclick){
        setInterval(500000);
    }*/

};

