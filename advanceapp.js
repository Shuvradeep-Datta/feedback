// Promise

const customPromise=new Promise(
    (resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("work done");
            reject("Something went wrong");
        },200);
    }
    )

    customPromise
            .then(
                (result)=>console.log(result)
                ).catch((error)=>console.log(error)
                );