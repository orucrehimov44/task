const ll=[];
const run=function(){
    fetch('https://api.publicapis.org/entries')
    .then(res => {
        return res.json()
    }).then(data=>{
        this.ll=data.entries

    })
    .catch(error => {
        console.log(error)
    });
}
run()
const coll=document.querySelectorAll('.col-header');

coll.forEach(col=>{
    col.addEventListener('click',()=>{
        this.ll.forEach(en=>{
            if(en.Category.toUpperCase()==col.innerHTML){
                col.parentElement.children[1].innerHTML +=en.Description
            }
            if(col.innerHTML=='OTHERS'){
                col.parentElement.children[1].innerHTML +=en.Description
            }
        })
    })
})



