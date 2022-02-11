// "use strict"

// request({
//     metod:"GET",
//     url:"https://restcountries.com/v3.1/name/{Kyrgyzstan}",
//     succes: response =>{
//         console.log(response);
//     },

    
//     succes: response =>{
//         const res = JSON.parse(response);
//         console.log(res);
    
//         const name = document.getElementById("name");
//         name.innerHTML = res[0].altSpellings;
    
//         const capital = document.getElementById("capital");
//         capital.innerHTML = res[0].flag;
//     },
// })


// const cr = document.createElement('div');
// const ct = document.createElement('div');
// const cd = document.createElement('div');
// const cl = document.createElement('div');
// const cs = document.createElement('div');



// container.append(cr)
// cr.append(ct)
// cr.append(cd)
// cr.append(cl)
// cr.append(cs)


































// "use strict"


// request({
//     metod:"GET",
//     url:"https://restcountries.com/v3.1/name/{Kyrgyzstan}",
//     succes: response =>{
//         const res = JSON.parse(response);
//         console.log(res);



//         const name = document.getElementById("name");
//         name.innerHTML = res[0].altSpellings[0];
//         // name.style.border = " 1px solid black"

//         const capital = document.getElementById("flag");
//         capital.innerHTML = res[0].flags.png;

//         const stop = document.getElementById('finish')
//         stop.innerHTML = res[0].name.common;

//         const language = document.getElementById("cap");
//         language.innerHTML = res[0].capital;

//         const comp = document.getElementById("populat");
//         comp.innerHTML = res[0].population;
//     },

//     error : massage =>{
//         console.log(`error ${massage}`);
//     }

// })

