function test1(callback){
	console.log("test1()");
}

function test2(variable,callback){
   
   console.log(variable);
   callback(callback);  //calling callback
}

test2(1,test1);
console.log(typeof test2);
//console.log(clientData.setUserName());

clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function (firstName, lastName)  {
      console.log(this.id);	
      this.fullName = firstName + " " + lastName;
    },
    bindfn: function ()  {
      console.log(this.id);	
    }
};

console.log(clientData.setUserName(1,2));
console.log(clientData.fullName);

obj1={
	id:1,
	setUserName:function(callback){
		console.log("obj1.setUserName(test1);");
        callback();
	}
}

bindObj=obj1.setUserName.bind(clientData);
console.log(bindObj(test1))

obj1.bindfn = clientData.bindfn.bind(obj1);
obj1.bindfn();

clientData.bindfn.bind(obj1)();

