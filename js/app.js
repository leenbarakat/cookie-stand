'use strict';
let container = document.getElementById('container')
let hours = ['6AM ', '7AM ', '8AM ', '9AM ', '10AM ', '11AM ', '12PM ', '1PM ', '2PM ', '3PM ', '4PM ', '5PM ', '6PM ', '7PM ']
let tableEl = document.createElement('table');
container.appendChild(tableEl);

 let  salmonStore = [];
 

function salmonCookiesStore (storeName, minCust, maxCust, averageCookie)

{
this.storeName = storeName;
this.minCust = minCust;
this.maxCust = maxCust;
this.averageCookie = averageCookie;
this.total = 0;
this.randomCust = [];
this.cookiePerhours = [];
salmonStore.push(this);
}


salmonCookiesStore.prototype.custPerHours = function() 
{
      let min;
      let max;
      for(let i = 0; i < hours.length; i++)
      {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let custRandom = Math.floor(Math.random() * (max - min + 1) + min);
        this.randomCust.push(custRandom)
      }
}

salmonCookiesStore.prototype.hoursByCookies = function(){

  for (let i = 0; i < hours.length; i++) 
    {
        this.cookiePerhours[i] = Math.ceil(this.randomCust[i] * this.averageCookie);
        this.total += this.cookiePerhours[i];  
    }
}

salmonCookiesStore.prototype.render = function () 
{
  let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = this.storeName;


    for (let i=0; i < hours.length; i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookiePerhours[i];
    }

    let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.total; 
}


      function  creatorOfHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
     
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';
     

        for (let i = 0; i < hours.length; i++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = hours[i];
     
        }
        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Total';
      }
      
      let form = document.getElementById('formID');
    form.addEventListener('submit', newStore);
    function newStore(event) {
    
        event.preventDefault();
        let storeName = event.target.storeName.value;
        let minCust = event.target.minCust.value;
        let maxCust = event.target.maxCust.value;
        let averageCookie = event.target.averageCookie.value;
        let newShop = new salmonCookiesStore (storeName, minCust, maxCust, averageCookie);
        

        let table = tableEl.rows.length-1;
            tableEl.deleteRow(table);

            newShop.custPerHours();
            newShop.hoursByCookies();
            newShop.render();

            creatorOfFooter();

        }

     
    function creatorOfFooter(){
      let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);

        thEl20.textContent = 'Total';

        thEl20.textContent = 'total';

        let newTotal = 0;
        
        for(let i = 0 ; i < hours.length; i++)
        {
            let total = 0;
             
            for(let j = 0 ; j < salmonStore.length; j++)
            {
                total =  total + salmonStore[j].cookiePerhours[i];
                newTotal = newTotal + salmonStore[j].cookiePerhours[i];
            }
         
            let thEl10 = document.createElement('td');
            trEl.appendChild(thEl10);
            thEl10.textContent = total;
        }

        let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = newTotal;
    };


    let storeOne = new salmonCookiesStore ('seatlle', 23, 65,6.3)
    let storeTwo = new salmonCookiesStore ('Tokyo', 3, 24,1.2)
    let storeThree = new salmonCookiesStore ('Dubai', 11, 38,3.7)
    let storeFour = new salmonCookiesStore ('Paris', 20, 38,2.3)
    let storeFive = new salmonCookiesStore ('Lima', 2, 16,4.6)

     creatorOfHeader();


    storeOne.custPerHours();
    storeOne.hoursByCookies();
    storeOne.render()

    storeTwo.custPerHours();
    storeTwo.hoursByCookies();
    storeTwo.render()

    storeThree.custPerHours();
    storeThree.hoursByCookies();
    storeThree.render()

    storeFour.custPerHours();
    storeFour.hoursByCookies();
    storeFour.render()

    storeFive.custPerHours();
    storeFive.hoursByCookies();
    storeFive.render()


    createrOfFooter();