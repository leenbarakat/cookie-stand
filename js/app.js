'use strict';
let container = document.getElementById('container')
let hours = ['6AM ', '7AM ', '8AM ', '9AM ', '10AM ', '11AM ', '12PM ', '1PM ', '2PM ', '3PM ', '4PM ', '5PM ', '6PM ', '7PM ']
let tableEl = document.createElement('table');
container.appendChild(tableEl);

 let  shopsOfSalmon = [];

function ShopOfSalmonCookie (location, minCustomer, maxCustomer, avgCookies)

{

this.location = location;
this.minCustomer = minCustomer;
this.maxCustomer = maxCustomer;
this.avgCookies = avgCookies;
this.total = 0;
this.randCustomer = [];

this.cookiesByHour = [];
shopsOfSalmon.push(this);
}

 let shopA = new ShopOfSalmonCookie ('seatlle', 23, 65,6.3)
    let shopB = new ShopOfSalmonCookie ('Tokyo', 3, 24,1.2)
    let shopC = new ShopOfSalmonCookie ('Dubai', 11, 38,3.7)
    let shopD = new ShopOfSalmonCookie ('Paris', 20, 38,2.3)
    let shopE = new ShopOfSalmonCookie ('Lima', 2, 16,4.6)


ShopOfSalmonCookie.prototype.numCustomersPerHour = function() 
{

   let min;
      let max;
      for(let i = 0; i < hours.length; i++)
      {
        min = Math.ceil(this.minCustomer);
        max = Math.floor(this.maxCustomer);

 let randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
        this.randCustomer.push(randomCustomer)
      }
}

ShopOfSalmonCookie.prototype.numCookiesPerHour = function(){

  for (let i = 0; i < hours.length; i++) 
    {

 this.cookiesByHour[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
        this.total += this.cookiesByHour[i];  
    }
}

ShopOfSalmonCookie.prototype.render = function () 
{

  let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = ${this.location};

    for (let i=0; i < hours.length; i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = ${this.cookiesByHour[i]};
    }

let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.total; 
}

function  tableHeaderCreater() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';


        for (let i = 0; i < hours.length; i++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = ${hours[i]};

        }
        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Total';
      }
     tableHeaderCreater();

    function tableFooterCreater(){
      let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);
        thEl20.textContent = 'total';
        let newTotal = 0;

        for(let i = 0 ; i < hours.length; i++)
        {
            let total = 0;

            for(let j = 0 ; j < shopsOfSalmon.length; j++)
            {
                total =  total + shopsOfSalmon[j].cookiesByHour[i];
                newTotal = newTotal + shopsOfSalmon[j].cookiesByHour[i];
            }

            let thEl10 = document.createElement('td');
            trEl.appendChild(thEl10);
            thEl10.textContent = total;
        }

 let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = newTotal;
    };

shopA.numCustomersPerHour();
    shopA.numCookiesPerHour();
    shopA.render()

shopB.numCustomersPerHour();
    shopB.numCookiesPerHour();
    shopB.render()

  shopC.numCustomersPerHour();
    shopC.numCookiesPerHour();
    shopC.render()

shopD.numCustomersPerHour();
    shopD.numCookiesPerHour();
    shopD.render()

 shopE.numCustomersPerHour();
    shopE.numCookiesPerHour();
    shopE.render()

 tableFooterCreater();