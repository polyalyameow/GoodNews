
window.onload = function fetchData() {
    Promise.all([
    fetch("../public/hot-news.json"),
    fetch("../public/news.json")])
      .then((res => {return Promise.all(res.map(res => res.json()))}))
      .then((data) => {
        console.log(data);
        
        let output = "";
        let myIndex = 0;
        // console.log(data)
        // console.log(data.length)
        for (item in data) {
            for (i in item){
                console.log(data[item[i]])
                console.log(data[item[i]].length) //res of both news
                // console.log(data[item[i]][x]) //first element of both
                // while( x <= data[item[i]].length){
                //     x++;
                    //console.log(x)
                    // console.log(data[item[i]][x])
                    for (x in i) {
                    console.log(i[x]) // index 0
                    console.log(data[item[i]][x]) // first object of both segments
                    
                    x++;
                    
                   
                    // console.log(data[item[i]][x])
                }
                console.log(data[item[i]][x])
                
            }
            
            
            
       
        }


    }
        
        
    )}