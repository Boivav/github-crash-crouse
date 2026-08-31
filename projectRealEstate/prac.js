function createPromise(){
    return new Promise((resolve,reject) => {
        let num = Math.random()>0.5
        if(num){
            resolve(`Operation successfull`)
        }
        else{
            reject(`Operation unsuccessfull`)
        }
    })
}

async function main(){
    try{
        const promise1 = createPromise()
        const promise2 = createPromise()
        const promise3 = createPromise()
        const result = await Promise.all
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

