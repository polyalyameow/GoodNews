

async function fetchTestimonials() {
    await 
    fetch("/public/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let output = "";

        for (item in data) {
            // console.log(data);
            
    
              output += `
                <div class="aside"> 
                    <img class="aside__pic" src="${data[item].image}" alt="${data[item].alt}"/>
                    <p class="aside__caption-name">${data[item].name} ${data[item].surname}</p>
                    <p class="aside__caption-city">${data[item].city}</p>
                    <p class="aside__text">${data[item].text}</p>
                </div>
    
         ` ; 
    
         
          }

          document.querySelector(".aside").innerHTML = output;
        });
    };
    
    fetchTestimonials()