function test(){

let pro = new Promise((resole,reject)=>{
let a = 1+3;
if(a==2){
    resole(()=>{
        console.log("sgsfdg");
    });
}else{
reject("fail");
} 
});
let result = pro;
console.log(result);
pro.then((message)=>{
    
})

}

test();
