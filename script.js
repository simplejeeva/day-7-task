//Solving problems using array functions on the rest countries' data.
//a.Get all the countries from the Asia continent /region using the Filter function

// var request= new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send();
// request.onload=function(){
//     var data= request.response
//     var result =JSON.parse(data)
//      var res = result.filter((ele)=>{
//      if(ele.region=="asia"){
//         return ele.name;
//      }
     
// })
// console.log(res);
// }

//---------------------------------------------------------------------------------------------------
//b.Get all the countries with a population of less than 2 lakhs using Filter function

// var request= new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send();
// request.onload=function(){
//     var data=request.response
//     var result =JSON.parse(data)
//      var res = result.filter((ele)=>ele.population<200000)
//      var res1 = res.map((ele)=>`${ele.population}:${ele.name.common}`)
//      console.log(res1)
//}
//--------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function

// var request= new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send();
// request.onload=function(){
//     var data=request.response
//     var result =JSON.parse(data)


//     var res =result.forEach((ele)=>{console.log(`${ele.name.common}:${ele.capital}:${ele.flag}`)})
//     console.log(res)
// }
//------------------------------------------------------------
// d.Print the country which uses US Dollars as currency.

// var request = new XMLHttpRequest();
// request .open("GET", "https://restcountries.com/v2/all")
// request.send();
// request.onload = function() {
//     var data = request .response
//     var result = JSON.parse(data)
//     var res = result.filter((dummy) => (dummy.currencies !== undefined))
//     var res2 = res.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
//     console.log(res2)
// }




