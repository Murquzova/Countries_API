async function getCountry(){
    
    let data = await fetch(`https://restcountries.eu/rest/v2`).then(a=>a.json());
    console.log(data[1]);
    data.forEach(data=>{
          document.getElementById('div1').innerHTML+=`
          <div class="divapi">
            <h1>Olke:${data.name}</h1>
             <img src='${data.flag}' style="width:400px"/>
            <h3>Paytaxt: ${data.capital}</h3>
            <h3>Region:${data.region}</h3>
            <p>Ehale sayini:${data.population}</p>
            <p id="qmw">Qomshular: ${data.borders}</p>
          </div>
    `
    })
   
    document.getElementById('input').addEventListener('input',(a)=>{
        const countries = document.querySelectorAll('#div1 div');
        countries.forEach(country=>{
            country.classList.remove('hide');
            if(!(country.firstChild.nextElementSibling.innerHTML.toLowerCase().includes(a.target.value.toLowerCase()))){
                country.classList.add('hide');
            }
        })
       
    })
}

getCountry();

