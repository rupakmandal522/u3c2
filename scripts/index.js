async function data()
{
        let res=await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
        let menu1=await res.json();
        const type=menu1.menu.data
        console.log(type)
        append(type)
  

}

function append(type){
type.forEach(function(el)
{
    let div=document.createElement("div")
    div.setAttribute("id","div1")
    let img=document.createElement("img")
    img.setAttribute("id","img1")
    img.src=el.image;
    let name=document.createElement("h2")
    name.innerText=el.title;
    let h2=document.createElement("h2");
    h2.innerText=el.price;
    let btn=document.createElement("button")
    btn.innerText="Add to cart";
    btn.setAttribute("id","add_to_bucket")
    btn.addEventListener("click",function()
    {
        additem(el)
    })
    div.append(img,name,h2,btn)
    document.querySelector("#menu").append(div)
})
function additem(el)
{
    var arr=JSON.parse(localStorage.getItem("coffee"))||[];
    arr.push(el)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}


}
let arr=JSON.parse(localStorage.getItem("coffee"))


data();