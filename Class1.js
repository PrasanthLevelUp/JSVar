class Demo{
    constructor(name){
        this.name = name;
    }
    namelist=[];

    getname(){
        return{name:this.name};
    }

    addname(name){
        this.namelist.push(name)
    }
}

module.exports = Demo;