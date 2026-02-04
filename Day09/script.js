// const query = document.querySelector("#content p");
// console.log(query,"query");
// query.textContent = "jidh sdo sof oos fojofj"

// //querryselectorall

// const query2 = document.querySelectorAll("p");
// console.log(query2, "query");

// for (let i=0; 1<query2.length;i++){
//     query2[i].textContent="ojwk kdn d owkopjiodo"

const para = document.getElementsByTagName("p");
for(let i=0;i<para.length;i++){
    if(i%2===0){
        para[i].style.color="blue"
    }
    else{
        para[i].style.color="green"
    }
}

console.log(para)


