// function handleClick(){
//     document.querySelector("#head").style.color="red";

//     document.getElementById("btn").textContent="color changed";
// }



// const handleClick = () => {
// const image = document.createElement("img");
// image.setAttribute("src","https://media.getmyuni.com/azure/college-image/big/kr-mangalam-university-krmu-gurgaon.jpg");


// image.setAttribute("alt","building view");
// document.getElementById("content").append(image);
// }




document.getElementById("btn").addEventListener("click",()=>{const image = document.createElement("img");
image.setAttribute("src","https://media.getmyuni.com/azure/college-image/big/kr-mangalam-university-krmu-gurgaon.jpg");


image.setAttribute("alt","building view");
document.getElementById("content").append(image);})