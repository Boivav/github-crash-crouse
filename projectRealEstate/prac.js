function preLoadImg(url){
    return new Promise((resolve,reject) => {
          let img = new Image()
          img.src = url
          img.alt = 'Image generated using constructed'
          img.addEventListener('load', () => resolve(img))
          img.addEventListener('error', () => reject(new Error(`Failed to load`)))
    })
}
async function main(){
      try{
        const result = await preLoadImg('https://imgs.search.brave.com/CKFEdELwFyQrkB2w22jA9ifpsJJ2-oEKnuD0jO__IaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3NuYXBwZWQt/c3BpZGVyLW1hbi00/ay1tYXJ2ZWwtaXBo/b25lLWNybXZlYXRw/ZTh1ZjVwdHAuanBn')
        console.log(result)
        document.getElementById('Image-1').appendChild(result)
        }catch(error){
            console.log(error)
        }
        finally{
            console.log(`Work done`)
        }
}

main()

