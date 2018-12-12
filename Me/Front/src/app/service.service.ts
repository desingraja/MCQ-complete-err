import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private baseurl:String="https://nodejsmlab.herokuapp.com";//'http://localhost:3000'
  private baseurl:String ="http://localhost:3000";
  constructor(private http:HttpClient) { }
  // READ
  read(){
    
    return this.http.get(this.baseurl+'/getquestion');
  }

//  CREATE
   create(Qno,question,option1,option2,option3,option4,keyanswer){
    var z = {
      qid:Qno,
      question:question,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      keyAnswer:keyanswer    
      
    }
      console.log("Service:"+z);
  return this.http.post(this.baseurl+'/createquestion',z);
   
}
// UPDATE
update(Qno,question,option1,option2,option3,option4,keyanswer){
  var z1 = {
    question_id:Qno,
    question:question,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    keyAnswer:keyanswer    
    
  }
    console.log("Service:"+z1);
return this.http.put(this.baseurl+'/updatequestion',z1);
 
}

// DELETE

delete(Qno){
  var del:any = {
    question_id:Qno 
    
  }
    console.log("Service:"+del);
return this.http.delete(this.baseurl+'/deletequestion',del);
 
}

signup(uname,unamelast,mail,psw){
  var book:any = {
    uname:uname,
    unamelast:unamelast,
    mail:mail,
    psw:psw

  }
  console.log(uname,unamelast,mail,psw);
  console.log("signup service"+book);
  return this.http.post(this.baseurl+'/signup',book);
}

login(user,psw){

  var details:any={
    user:user,
    psw:psw
  }
  console.log(user,psw);
  console.log("login service"+details);

  return this.http.post(this.baseurl+'/login',details);
}

usersignup(a,b,c,d)
{
  var sign={
    name:a,
    empid:b,
    mail:c,
    pwd:d
  }
  console.log(a,b,c,d);
  console.log("service" + sign );
return this.http.post(this.baseurl+'/usersignup',sign);
}

userlog(name,pwd)
{
  var log={
    name:name,
    pwd:pwd
  }
  console.log(name,pwd);
  console.log("service"+' '+log);
  return this.http.post(this.baseurl+'/userlog',log);
}

getqus(){
  return this.http.get(this.baseurl+'/getquestion')
}
getuserdetail(){
  return this.http.get(this.baseurl+'/usersignupdata')
}
getlogin()
{
  return this.http.get(this.baseurl+'/logindata');
}
getsignup()
{

  return this.http.get(this.baseurl+'/signupdata');
}
int:any=[]
storevalue1(input)
{
this.int.push(input)
console.log(this.int)
}
storevalue()
{
return this.int

}
inp:any=[]
values(input){

this.inp=input
console.log("inp"+this.inp)

}
value()
{

  return this.inp;

}
// val=0
// style1()
// {
  
 
//   if(this.val==1){

//   document.getElementById('styleid').style.display='block';
// }
// }

style()
{
  document.getElementById('styleid').style.display='block';
// this.val=1
}

  ngOnInit(){
    
  }
}
