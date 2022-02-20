
function addition(a, b){
    return parseInt(a) + parseInt(b);
}

function f2(){
    console.log("in f2");
}

var user = {
Name: "arjun",
Empid:"101",
EmpDept:"Manager"
}
function f3(n)
{
    for(i=0;i<=n;i++)
    {
        i=i+1;
    }
    return i;
}
 module.exports={
    add :addition,
     f2 :f2,
     f3 :f3,
     user:user

 }