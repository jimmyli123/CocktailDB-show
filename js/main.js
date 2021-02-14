
document.querySelector('#vodka').addEventListener('click', executeVodka)

const tempUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const fullDetails = "https://www.thecocktaildb.com/drink/"
let vodkaCounter = 0;

function executeVodka() {
    if (vodkaCounter > 0) {
        return;
    }
<<<<<<< HEAD
=======
    
>>>>>>> 109e61872d3dc6c8dde9eee84c92d08e27597e59
    vodkaCounter++;
    const url = tempUrl + 'vodka'
    fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.drinks.forEach((eachDrink,index) => {
            
            const link = document.createElement('a');
            link.setAttribute('target', '_blank')
            let setID = "drinkLink" + index;
            link.id = setID;
            let temp = eachDrink.strDrink.split(' ').join('-');
            link.href = `${fullDetails}${eachDrink.idDrink}-${temp}`
            document.querySelector('#carousel').appendChild(link);

            /* Creating image elements */
            const image = document.createElement('img');
            image.id = "imageIndex" + index;
            image.src = eachDrink.strDrinkThumb;
            document.querySelector(`#${setID}`).appendChild(image);

            
        })
    
    }
    )
}







