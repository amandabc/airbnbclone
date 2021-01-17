
const API_URL = "https://dry-cliffs-94979.herokuapp.com/";


const fetchAPI = async(url) => {
  let response = await fetch(url);
  const textResponse = await response.text();
  return JSON.parse(textResponse);
}


  const renderPage = async () => {

    const apiData = await fetchAPI(API_URL);

    console.log(apiData);
    const mainDiv = document.getElementById("container");

    apiData.forEach(property => {

    const { name, photo, price, property_type } = property;

    card = document.createElement("div");
    card.className = "card";

    cardInfo = document.createElement("div");
    cardInfo.className = "card-info";

    cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.src = photo;

    propertyType = document.createElement("div");
    propertyType.className = "property-type";
    propertyType.innerHTML = property_type;

    propertyPrice = document.createElement("div");
    propertyPrice.className = "property-price";
    propertyPrice.innerHTML = "R$ " + price.toFixed(2) + '/noite'

    propertyName = document.createElement("div");
    propertyName.className = "property-name";
    propertyName.innerHTML = name;


    mainDiv.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(propertyName);
    cardInfo.appendChild(propertyType);
    cardInfo.appendChild(propertyPrice);
    });

}

renderPage();
