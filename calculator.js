function getValue(e){
    data=e.target.value
    // document.getElementById("result").value+=data
    // document.querySelector('#result').value+=data
    result.value+=data
}

function findResult(){
    exp=document.getElementById("result").value
    // exp=result.value
    // console.log(exp);
    res=eval(exp)
    // console.log(res);
    document.getElementById("result").value=res
}

function dataClear(){
   document.getElementById("result").value=""
}