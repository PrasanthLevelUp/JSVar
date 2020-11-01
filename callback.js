let fn = (name, cb)=>{
    console.log(name);
    setTimeout(()=>{
        console.log("wait");
    },2000);
    cb();
    setTimeout(()=>{
        console.log("next wait");
    },500);
}

function test(){
    console.log("Niho");
}

 fn("niho",()=>{
     console.log("after wat
     ")
 });
 