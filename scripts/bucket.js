// On clicking remove button the item should be removed from DOM as well as localstorage.

var cartArr = JSON.parse(localStorage.getItem('coffee'))
// let cartd = document.getElementById("bucket");
cartArr.forEach(function(el)
{
    let div=document.createElement("div")
  
    let img=document.createElement("img")
    
    img.src=el.image;
    let name=document.createElement("h2")
    name.innerText=el.title;
    let h2=document.createElement("h2");
    h2.innerText=el.price;
    let btn=document.createElement("button")
    btn.innerText="Remove Bucket";
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function()
    {
        additem(el)
    })
    div.append(img,name,h2,btn)
    document.querySelector("#bucket").append(div)
})
function additem(el)
{
    var arr=JSON.parse(localStorage.getItem("coffee"))||[];
    arr.push(el)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}

// let total_price= cartArr.reduce(function(sum,element
//     ){
//         return sum + Number(element.price);
//     },0)


//     document.querySelector("total_amount").append("div");

//     function remove(id){
//         let removeItem = JSON.parse(localStorage('coffee'));

//          let display = removeItem.filter(function(element){
//              return element.id != id;
//          })

//          appendCart(display)
//          window.location.reload();
//          localStorage.set('cofee',JSON.stringify(display));

//           total_price= display.reduce(function(sum,display){
//               return sum + Number(element.price);
//           })

//           document.querySelector("total_amount").append("totalDiv");
            

//     }
//     function checkout()
//     {
//         window.location.href="./checkout.html"
//     }

   