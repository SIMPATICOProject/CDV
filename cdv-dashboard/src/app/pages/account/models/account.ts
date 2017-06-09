export class Account {
    constructor(
        public id: string, 
        public activated: boolean, 
        public created:Date,
        public modified:Date,
		public particular: Particular= new Particular("","",new Date(),""), // refer to type Particular  below
		public contacts: Contact[], // refer to type Contact  below
		public emails: Email[], // refer to type Email  below
		public telephones: Telephone[], // refer to type Telephone  below
		public serviceLinkRecords:ServiceLinkRecord[],
		public pData: PData[]
        ){}
}

export class Particular {
    constructor(
       // public id: string, 
        public firstname: string, 
        public lastname:string,
        public dateOfBirth:Date,
        public imgUrl:string
        ){}
}

export class Contact {
    constructor(
       // public id: string, 
        public address1: string,
		public address2: string,		
        public postalCode:string,
        public city:string,
        public state:string,
        public country:string,
        public type:string, //Enum:	"PERSONAL", "WORK", "SCHOOL", "OTHER"
        public primary:boolean		
        ){}
}

export class Email {
    constructor(
      //  public id: string, 
        public email: string, 
        public type:string, //Enum:	"PERSONAL", "WORK", "SCHOOL", "OTHER"
        public primary:boolean		
        ){}
}

export class Telephone  {
    constructor(
       // public id: string, 
        public tel: string, 
        public type:string, //Enum:	"PERSONAL", "WORK", "SCHOOL", "OTHER"
        public primary:boolean		
        ){}
}
export class ServiceLinkRecord   {
    constructor(
        public id: string, 
        public serviceId: string, 
        public surrogateId:string, //Enum:	"PERSONAL", "WORK", "SCHOOL", "OTHER"
        public accountId:string,
        public created:Date,
		public serviceLinkStatusRecords:ServiceLinkStatusRecord []
        ){}
}

export class ServiceLinkStatusRecord {
    constructor(
        public id: string, 
        public serviceLinkStatus : string, 
        public issuedAt :string	
        ){}
}

export class PData    {
    constructor(
        public conceptId : string, 
        public name: string, 
        public type:string, //Enum:	"PERSONAL", "WORK", "SCHOOL", "OTHER"
        public timestamp: string,
        public values:string[]
        ){}
}