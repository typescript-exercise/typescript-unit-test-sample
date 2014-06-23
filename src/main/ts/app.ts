class Sample {
    private name : string;
    
    constructor(name : string) {
        this.name = name;
    }
    
    introduceMyself() : string {
        return 'My name is ' + this. name + '.';
    }
}
