export abstract class IQuestion{
    abstract askQuestion():string;
    public sayHello():void{
        console.log("Hello From IQuestion...");
    }
}