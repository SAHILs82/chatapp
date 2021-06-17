const one=document.getElementById('one')
const form=document.getElementById('form')
const two=document.getElementById('two')
const form2=document.getElementById('form2')
const btn=document.getElementById('btn')
const btn2=document.getElementById('btn2')
const msg=document.getElementById('msg')
const btn3=document.getElementById('btn3')
const btn4=document.getElementById('btn4')
const received=document.getElementById('received')
const received2=document.getElementById('received2')
let newlist=[]

btn.addEventListener('click',function (e) {
    if(form.value!="")
    {
     received2.value=form.value
    }
})

btn2.addEventListener('click',function (e) {
    if(form2.value!="")
    {
     received.value=form2.value
    }
})

btn3.addEventListener('click',function (e) {
    console.log('received from sahil')
    
})
btn4.addEventListener('click',function (e) {
    console.log('received from priya')
    
})

function addtext(){
    const newtest = form.value;
    if(!newtest) return;
   

    let data = {
        text:newtest,
        complete:false
    }
    newlist.push(data)
    console.log(newlist);
     newtest==received
}

function addnewtext() {
    const newtest2=form2.value;
    if(!newtest2) return;

    let input ={
        text:newtest2,
        complete:false
    }
    newlist.push(input)
    console.log(newlist);
}



function result(){
    msg.innerHTML=null;
    for(let i=0;i<newlist.length;i++){
        const item=document.createElement("li");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";

        checkbox.addEventListener("click",function (e) {
            newlist[i].complete=e.target.checked;

            if(newlist[i].complete){
                item.classList.add("completed")
                item.classList.remove("incomplete")
                text.checked=newlist[i].complete
            }
            else{
                item.classList.add("incompleted")
                item.classList.remove("complete")
                text.checked=newlist[i].complete
            }
            
        })

        const text=document.createElement("p")
        text.innerText=newlist[i].text

        const button=document.createElement("button")
        button.innerText="no"

        button.addEventListener("click",function(e){
            newlist.splice(i,1);
            result()
        })

        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        msg.appendChild(item)
        msg.value=null;
    }
}
