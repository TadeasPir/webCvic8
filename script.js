class Painting{
constructor(author, name, price,year){
this.author = author;
this.name = name;
this.price = price;
this.year = year;
}
getPainting(){
    return ` author: ${this.author.getAuthor()} name: ${this.name} price: ${this.price}$ made: ${this.year}`;
}
getAuthorOfPainting(){
        return ` ${this.author.name} ${this.author.surname}`;
}
}
class Author{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }

    getAuthor(){
        return ` ${this.name} ${this.surname}`;
    }
}


class Galerry{
constructor(){
    this.paintings = [];
}

addPainting(painting){
    this.paintings.push(painting);
}
valueOfGallery(){
    let sum = 0;
    for(let i = 0;i<this.paintings.length;i++){
        sum += this.paintings[i];
    }
    return sum;
}
getTopPaintings(){
        this.paintings.sort((a, b) => {
            if (a.price < b.price) {
                return -1;
              } else if (a.price > b.price) {
                return 1;
              }
              return 0;
        }).reverse();
    
    return `1:  ${this.paintings[0].getPainting()} \n 2:  ${this.paintings[1].getPainting()}$ \n 3:  ${this.paintings[2].getPainting()}$`;
}


getPaintingsFromAuthor(author){
    let temp = [];
   this.paintings.forEach(element => {
        if(element.getAuthorOfPainting() === author.getAuthor()){
            temp.push(element);
        }
    });
    return temp;
}
getAllPaintings(){
    let authors = [];
    this.paintings.forEach(element => {
        authors.push(element.getAuthorOfPainting());    
    });

    console.log(authors);
    let temp = new Map();
    for(let i = 0; i< authors.length;i++){
        
       for(let j = 0; j<this.paintings.length;j++){

        if(this.paintings[j].getAuthorOfPainting() === authors[i]){
            console.log(temp.set(authors[i],this.paintings[j]));
        }
            
        }
    }
   
 
  return temp;
}
    
}
let galerry2 = new Galerry();
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
 
  e.preventDefault();
 
  const authorName = document.querySelector('#authorName').value;
  const paintingName = document.querySelector('#paintingName').value;
  const paintingPrice = document.querySelector('#paintingPrice').value;
  const paintingYear = document.querySelector('#paintingYear').value;
  let stringArray = authorName.split(/(\s+)/);
  let authorFistname = stringArray[0];
  let authorSurname = stringArray[1];

  galerry2.addPainting(new Painting(new Author(authorFistname,authorSurname),paintingName,paintingPrice,paintingYear));
  form.reset();
});
let galerry = new Galerry();

let author1 = new Author("John","Doe");
let painting1 = new Painting(author1,"xyz",1000,2000);
let painting2 = new Painting(author1,"La mericano",1500,2004);

let author3 = new Author("Markus","Revolta");
let painting3 = new Painting(author3,"scientologie",500,1988);

let author4 = new Author("Peter","Griffin");
let painting4 = new Painting(author4,"xumbers",800,2015);


galerry.addPainting(painting1);
galerry.addPainting(painting2);
galerry.addPainting(painting3);
galerry.addPainting(painting4);
//console.log(galerry);
//console.log(galerry.getPaintingsFromAuthor(author1));

console.log(galerry.getAllPaintings());




console.log("///////////////////////////////////////////////////////////");
console.log(galerry2);


