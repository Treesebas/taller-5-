
function consumirAPI(){


    
    var apikey = "c8b28d16af18e6f2a8c6400aed4a4a7d";
    var ts = "1000";
    var hash = "f5944f418c04860d1c727617744b4bcd";
    var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;
  
  console.log(url);
  var espacio = document.getElementById("KS")

    fetch(url)
    .then(response => response.json())
    .then(json =>{

        for (item of json.data.results) {

            console.log(item.name)

            var div  = document.createElement("div");
            var img = document.createElement("img");
            img.src =  urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;   
            div.appendChild(img);
            
            var label = document.createElement("label")
            label.innerText = item.name

            

            var contenido = document.createElement("p")
              if  (item.description != ""){
                contenido.innerText = item.description
              }else{
                contenido.innerText = "N/D"
              }

              div.appendChild(label);
            div.appendChild(img);
            div.appendChild(contenido);
            espacio.appendChild(div);
            
                         
            var series = document.createElement("a");
            series.innerText = "series";
            series.href = "html/series.html?Heroe=" + item.series.collectionURI;
            div.appendChild(series);

              var linkcomics_1 = document.createElement("a");
                 linkcomics_1 .innerText = "Comic";
                 linkcomics_1 .href = "" + item.comics.collectionURI;
                 div.appendChild(linkcomics_1);

                 var linkeventos_n1 = document.createElement("a");
              linkeventos_n1.innerText = "Eventos";
              linkeventos_n1.href = "" + item.events.collectionURI;
              div.appendChild(linkeventos_n1);

              var linkStories_SP = document.createElement("a");
              linkStories_SP.innerText = "Stories";
              linkStories_SP.href = "" + item.stories.collectionURI;
              div.appendChild(linkStories_SP);
         }
        

    });



    
}

