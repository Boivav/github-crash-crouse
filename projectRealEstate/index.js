import { propertyForSaleArr } from "./propertyforSaleArr.js";
import { placeholderProperty } from "./placeholder.js";
function propertyHTML(propertyForSaleArr =  [placeholderProperty]){
let message = document.getElementById("insidebody")
let result = propertyForSaleArr.map(({propertyLocation,priceGBP,comment,roomsM2})=> {
     const roomSize = roomsM2.reduce((total,room) => total+room,0);
       
                       return `<section class = "card">
                                <div class = "card-right">
                                    <h2>${propertyLocation}</h2>
                                    <h3>${priceGBP}</h3>
                                    <p>${comment}</p>
                                    <p>${roomSize}</p>
                                    <h3>TOTAL SIZE IN SQUARE METRES</h3>
                                </div>
                            </section>`
                }                ).join(''); 
    message.innerHTML = result
}

propertyHTML(propertyForSaleArr);


