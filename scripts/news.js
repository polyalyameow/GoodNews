// request to fetch data from json file

let http = new XMLHttpRequest();

//prepare request
http.open("get", "/public/news.json", true);

//send request
http.send();

//catch response
http.onload = function () {
  //check ready state and status properties
  if (this.readyState == 4 && this.status == 200) {
    //convert json data to js array if response is ok
    let news = JSON.parse(this.responseText);
    // empty var to add the incoming data
    let output = "";

    let varCheck = [];
    
   
      for (let item in news) {
        let random = Math.floor(Math.random() * news.length);
        let random_news = news[random];
        if (varCheck.includes(random_news.title)) {
          console.log("already exist");
        } else if (varCheck.length < 9) {
        
            
            varCheck.push(random_news.title);
            output += `
                      <div class="articles--other">
                          <div class="articles--other__container">
                            <img  src="${random_news.image}" alt="${random_news.alt}" class="articles--other__pic" />
                              <h2 class="articles--other__title">${random_news.title}</h2>
                              <p class="articles--other__description">${random_news.description}</p>
                        </div>
                      </div>
                  `;
          
                }
        document.querySelector(".articles--other").innerHTML = output;
      
      
    }
      console.log(varCheck);
    }
      
      

    
  
};
