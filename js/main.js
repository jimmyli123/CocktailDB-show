
document.querySelector('#vodka').addEventListener('click', executeVodka)

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const tempUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const fullDetails = "https://www.thecocktaildb.com/drink/"


function executeVodka() {
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
            const image = document.createElement('img');
            image.src = eachDrink.strDrinkThumb;
            document.querySelector(`#${setID}`).appendChild(image);

            
        })
    
    }
    )
}






