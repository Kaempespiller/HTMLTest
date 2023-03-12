class wine{
    constructor(id, img, titel, desc, rating){
        this.id = id;
        this.img = img;
        this.titel = titel;
        this.desc = desc;
        this.rating = rating;
    }
}

var mainBox = document.getElementById("mainBox");
var openBox = document.getElementById("openBox");

mainBox.addEventListener("click", function() {
  openBox.style.display = "block";
});

document.addEventListener("click", function(event) {
    if (event.target != mainBox && event.target != openBox) {
      openBox.style.display = "none";
    }
  });
  