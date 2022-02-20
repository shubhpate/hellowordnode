var mymodule=require("./module1");
var mod=mymodule.f1(34,45);
console.log(mymodule.user);
mymodule.f2();
var ans =mymodule.f3(mod);
console.log(ans);