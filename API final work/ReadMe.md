API website: 

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other

. First, include an <main> line 40 on HTML page.
. Include a <input> element of type range id="searchmealbyname" and the API URL.

// Create a promise// const randomMeal = async ()=>{
    let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    return data
};(script.js)//line 2
 
. Add the link of the API's link in parentheses 
. Create constants that store references to <main>,and <input> elements.
. Use the // document.addEventListener('DOMContentLoaded',async ()=> method to create a data using - const randomMeal =. //


    let {data} = await axios.get {
 //create a promise 
     return data;
  }],


//Dom 
    document.addEventListener('DOMContentLoaded',async ()=>{ 

// The EventTarget method addEventListener() sets up a function that will be called the specified event is delivered to the target
   

// Add a const search promise await for data...
      const search = await randomMeal()//
      console.log(search)

 //create a cosnt area with firmographic attribute data to be returned 
//line 8 to 76
      const area = search.strArea
    

 //Create constants that store references to <#searchmealbyname> <input> elements allowing to be display on the screen.//
        `<ul>
        <h4>${value.strArea}</h4> //strArea firmographic attribute data
        
         };
        }); 