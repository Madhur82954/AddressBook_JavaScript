class AddressBook
{
    Name;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(Name,address, city, state, zip, phone, email)
    {
        this.Name = Name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    get Name() { return this._Name; }
    set(Name) 
    {
        this._firstName = firstName;
    }
    get address() { return this._address; }
    set(address) 
    {
        this._address = address;
    }
    get city() { return this._city; }
    set(city) 
    {
        this._city = city;
    }
    get state() { return this._state; }
    set(state) 
    {
        this._state = state;
    }
    get zip() { return this._zip; }
    set(zip) 
    {
        this._zip = zip;
    }
    get phone() { return this._phone; }
    set(phone) 
    {
        this._phone = phone;
    }
    get email() { return this._email; }
    set(email) 
    {
        this._email = email;
    }
    toString() 
    {
        return "\nName:" + this.Name + " ,Address:" + this.address + " ,City:" + this.city + " ,State:" + this.state + " Zip:" + this.zip + " ,Phone:" + this.phone + ",Email:" + this.email;
    }
}
class AddressBook
{
    Name;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(Name,address,city,state,zip,phone,email)
    {
        this.Name=Name;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    get Name(){return this._Name;}
    set(Name)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(Name))
        this._Name=Name;
        else throw 'is invalid';
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        this._address = address;
        else throw 'invalid';
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        this._city=city;
        else throw 'invalid';
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        this._state=state;
        else throw 'invalid';
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw 'invalid';
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw 'invalid';
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        this._email=email;
        else throw 'invalid';
    }
    toString()
    {
        return "\nName:" + this.Name + " ,Address:" + this.address + " ,City:" + this.city + " ,State:" + this.state + " Zip:" + this.zip + " ,Phone:" + this.phone + ",Email:" + this.email;
    }
}
//UC3//

let addressArr = new Array();
try
{
    let address1 = new AddressBook("Madhur","panipat","haryana",132103,8295475016,"madhur@gmail.com");
    let address2= new AddressBook("karan","madhya pardesh","Maharashtra",124562,6969696969,"karan@gmail.com");  
    addressArr.push(address1);
    addressArr.push(address2);
    console.log(addressArr);
}
catch(ex)
{
    console.error(ex);
}
//UC4//
function SearchName(addressbook)
{
    if(addressbook.Name=="virat") return addressbook;
}
let Result =addressArr.find(SearchName);
console.log(" contact"+Result);
//UC5//
function DeleteAddress(addressbook)
{
    let Res = SearchName(addressbook);
    var index= addressArr.indexOf(res);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")
//UC6//
let n=0;
function GetTotal(a)
{
   if(a!=null)
   {
       ++n;
   }
   return n;
}
console.log("number of saved contacts"+addressArr.reduce(GetTotal,0));
//UC7//
function Duplicate(a)
{
    if(a.Name.includes("rohit"));
    ++n;
return n;
}
let count = addressArr.filter(Duplicate);
if(count=1)
{
    console.log("do not exist duplicate contact");
}
else if(count>1)
{
    console.log(" exist duplicate contact");
}
//UC8//
let InCity=addressArr.filter(a=>a.city.includes("mumbai"));
console.log(" contact with same city"+InCity);
//UC9//
 function Map(a){
return a.city+ " "+a.Name;
}
 let addressMap= addressArr.map(Map);
 console.log("no of contact in city")
 console.log(Map);