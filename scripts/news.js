arrayVal = [];
res =[];




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

                  //href="${"../pages/openedArticle.html"}"
            // console.log(news[item]);

            let val = Object.values(random_news)
            console.log(val)
            arrayVal.push(val) // to be able to access result everywhere in code
            



           
        }

        // console.log(arrayVal)

        // for (v in arrayVal){
        //   // console.log(arrayVal[v])
        //   res.push(arrayVal[v])
        // } 
        // console.log(res)

        console.log(arrayVal)

        document.querySelector(".articles--other").onclick = (e) =>{
          for (let r = 0; r < arrayVal.length; r++ ){
            console.log(arrayVal[r]) // 9 res
            console.log(e.target.value)
              if (e.target.value === undefined) {
                console.log(e.target.parentNode.children[0])
                let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
                console.log(imageAdr)
                let matches = imageAdr.match(/[^/]*$/);
                let imageName = "/images/" + matches
                console.log(imageName)
                if(res[r].includes(imageName)){
                  console.log("gotcha")
                  // ind = res[r].indexOf(imageName)
                  // value = res[r][ind];
                  value = imageName;
                  console.log(value);
                  localStorage.setItem("newsValue", value)
                }
              } else if(arrayVal[r].includes(e.target.textContent)){
                console.log("includes")
                let ind = arrayVal[r].indexOf(e.target.textContent);
                console.log(ind);
                let value = arrayVal[r][ind];
                console.log(value);
                localStorage.setItem("newsValue", value)
              }

            }
    
            
          }
            
        
    

        document.querySelector(".articles--other").innerHTML = output;
      
      
    }
      // console.log(varCheck);
      
    }
      

    
  
};
