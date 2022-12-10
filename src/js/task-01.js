


const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);


for( const elem of categoryEl){
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.dir(`Elements: ${elem.lastElementChild.children.length}`);    
}
