function sum(n)
{
    let total=0;

    for(let i=0;i<=n;i++)
    {
        total=total+i;
    }

    return total;
}

function findsumtill100()
{
    console.log(sum(100));
}

setTimeout(findsumtill100,1000);

console.log("hello world");