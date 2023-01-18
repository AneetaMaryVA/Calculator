function displayData(data){
    result.value+=data
}
function allClear(){
    result.value=""
}
function equalTo(){
    exp=eval(result.value)
    result.value=eval(exp)   
}
function back(){
    result.value=result.value.slice(0,-1) 
}