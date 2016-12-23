console.log('Started');
var a={
	b:'a',
	c:function test (argument) {
		console.log(argument + this.b)
	
	function test1 (argument) {
		console.log('test1')
	}
	function test2 (argument) {
		console.log(argument + this.b)
	}
    
    return argument;
	},
	save:(function(err){
       console.log('success');
       err(false);  //here err fn is passed as paeram to save, then err is invoked
	})
};

var d={b:'d'}
console.log(a.b);
a.c(1);
a.c.bind(d)(1);

console.log(setTimeout(function(){a.c("setTimeout "+1);},1000))


console.log(setInterval(function(){ console.log(a.c.bind(d)("setInterval"+1));},5000));

clearTimeout(1);
clearTimeout(2);

a.save(function(err) {  
  if (err)  {
    //error handling
    return;
  }
  console.log('err method-->'+err);
});

try{
   console.log(www);
}catch(error){
    console.log(error);
}finally{
	console.log("error handled");
}


function fool(){
	return {
		bar:"hello"
	};
}


function fool1(){
	return {
		bar:"hello"
	};
}

var myvar=fool;

	console.log(myvar);
	//console.log(fool1());

