function Greetr(){
    this.greeting = 'Hello greet3 world';
    this.greet = function(){
        console.log(this.greeting);
    };
};

module.exports = new Greetr();