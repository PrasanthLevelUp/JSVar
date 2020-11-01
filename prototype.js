var user = function(fn,ln){
    this.fn=fn;
    this.ln=ln;
    this.getname =function(){
        console.log(`my name ${this.fn} ${this.ln}`);
    };
};

user.prototype.getfirstname = function(){
    console.log(this.fn);
    };
var prasanth = new user("prasanth","piza");
console.log(prasanth);
prasanth.getname();

prasanth.getfirstname();
var niahrika = new user("niahrika","niho");
console.log(niahrika);