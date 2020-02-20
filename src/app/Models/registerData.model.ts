export class RegisterData {
    format:string;
    text:string;
    type:string;
    icon:string;
    created:Date;

    constructor(format: string, text: string){
        this.format = format;
        this.text = text;
        this.created = new Date();

        this.determineType()
    }

   private determineType(){
    const initText = this.text.substr(0,4);

    switch(initText){
        case 'http': 
        this.type = 'http'
        this.icon = 'globe'
        break;

        case 'geo:': 
        this.type = 'geo'
        this.icon = 'pin'
        break;

        default:
            this.type = 'No reconocido'
            this.icon = 'create'
    }


   }



}