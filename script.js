async function Search(){

    const response=await fetch("https://api.jikan.moe/v3/search/anime?q=Naruto");
    const data= await response.json();
console.log(data);
display(data);

}
Search()

function display(data){
  
    data.results.forEach((data)=>{
console.log(data.title)
        document.getElementById("div").innerHTML+=`

        <div class="card" style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title"><strong>${data.title}</strong></h5>
    <img class="card-img-top" src="${data.image_url}"  alt="Card image cap">
    <p>Episodes:${data.episodes}</p>
    <p>Rated:${data.rated}</p>
    <p>Score${data.score}</p>
    
   
  </div>
</div>

        `
    });
    
 

}