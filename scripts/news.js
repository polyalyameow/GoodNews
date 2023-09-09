
// request to fetch data from json file

let http = new XMLHttpRequest();

//prepare request
http.open("get", "/public/news.json", true);

//send request
http.send();

//catch response
http.onload = function News () {
  //check ready state and status properties
  if (this.readyState == 4 && this.status == 200) {
    //convert json data to js array if response is ok
    let news = JSON.parse(this.responseText);
    console.log(news)
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
                      <a href="${"../pages/openedArticle.html"}">
                          <div class="articles--other__container">
                            <img  src="${random_news.image}" alt="${random_news.alt}" class="articles--other__pic" />
                              <h2 class="articles--other__title">${random_news.title}</h2>
                              <p class="articles--other__description">${random_news.description}</p>
                        </div>
                        </a>
                      </div>
                  `;

                  
            console.log(news[item]);

            let val = Object.values(news[item])

            arrayVal.push(val)
          
        }

        console.log(arrayVal)
        for (v in arrayVal){
          // console.log(arrayVal[v])
          res.push(arrayVal[v])
        } 

        document.querySelector(".articles--other").onclick = (e) =>{
          for (let r = 0; r < res.length; r++ ){
            console.log(res[r])
              if(res[r].includes(e.target.textContent)){
                console.log("includes")
                let ind = res[r].indexOf(e.target.textContent);
                console.log(ind);
                let value = res[r][ind];
                console.log(value);
                window.localStorage.setItem("newValue", value)
              
              }
              else {
                console.log("doesnt include")
              }
            }
    
            
          }
    

        document.querySelector(".articles--other").innerHTML = output;
      
      
    }
      console.log(varCheck);
      
    }
      

    
  
};
