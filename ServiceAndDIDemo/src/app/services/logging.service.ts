export class LoggingService{
    logInfo(msg:string):void{
        console.log("Info Msg: " + msg);
    }
    logDebug(msg:string):void{
        console.log("Debug Msg: "+ msg);
    }
    logError(msg:string):void{
        console.log("Error Msg: "+ msg);
    }
    logWarning(msg:string):void{
        console.log("Warning Msg: "+ msg);
    }
}