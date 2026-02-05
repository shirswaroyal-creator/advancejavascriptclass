// const para=document.getElementsByClassName("para")
// para[0].innerText="this is a paragraph"
// para[1].style.color="green"
//  console.log(para) 
 
// const para=document.querySelectorAll(".para")             //return nodelist
// para[0].innerText="this is a paragraph"
// para[1].style.color="green"
// console.log(para) 

//  let arr=[23,54,46,232,564,23]
//  arr.forEach((ele)=>console.log(ele))
 
// const container=document.querySelector(".container")
// container.innerHTML="<h1>this is heading</h1>"
// console.log(container)

// console.log("document")


// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.addEventListener('click',function(){alert('timepass')

// const container=document.querySelector('.container')
// const button=document.querySelector('button')

// container.addEventListener('click',()=>{console.log('div')},true)                        //true use hoga to event  capature hoga
// button.addEventListener('click',()=>{console.log('button')},true)                        // true nhi hai to bubbling hoga
// debugger
// console.log(b)
// console.log(a)

// let a=23534
// var b=5674

// console.log(a)
// console.log(b)

// function print(){
//     var c=345
//     console.log(c)
//     console.log('inside fn')
// }

// print()

// setTimeout(()=>{
//     console.log('line after 5 sec')
// },10000)

// const timerID=setInterval(()=>{console.log('setinterval')},1000)

// const timeoutID=setTimeout(()=>{clearInterval(timerID)},1000)
//clear Timeout(timeoutId)

// let count =1;
// const intervalID = setInterval(function(){
//     console.log(count);
//     count++;
//     if(count>10){
//         clearInterval(intervalID);
//     }
// },1000)


const p = new promise ((resolve,reject)=>{
    let done = true;
    setTimeout(()=>{
        if (done){
            res({name:"royal",age:23})
        }else{
            reject("word has not been completed")
        }
        //reject()
    },5000)
})
p.then((data)=>{
    console.log(data.name)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally back")
})