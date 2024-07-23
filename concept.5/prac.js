let p=new Promise((resolve,reject)=>
{
    

    setTimeout(()=>
    {
        console.log("hello world 2")
    },3000)
    console.log("hello world 1")
})

console.log(p);