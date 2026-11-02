class Textbox{
    fill(text:string):void
    fill(text:string,locator:string):void

    fill(text : string, locator?:string){
        if(locator){
            console.log(`it has ${text} and ${locator}`)
        }
        else{
            console.log(`it has only ${text}`)
        }
    }
    
}
const tb = new Textbox()
tb.fill('hello')
tb.fill('hello, roleoflocator')
