// JavaScript Strings
//  string is sequence of symbols (characters) stored in memory
// string.split()

 let message = "How are your day is going?";
 console.log(message.split(" " , 4));

 console.log("one,two,three".split(","));
 console.log("hello world".split(""));
 console.log("abc".split("b"));

 // string.join()

 console.log(["hello", "world"].join(" "));
 let box1 = ['i','have', 'some','coffee', 'and', 'some','goods'];
 console.log(box1.join(" "));

 const matrix =[
    [1,2,3,4],
    [5,6,7,8],
    [8,9,0,1]
 ];

 console.log(matrix.join("-"));

 // string.trim 

 const userName = ' Amarjeet singh ';
 console.log(userName.trim(' '));

 // string.replace

 console.log('amarjeet400#gmail.com'.replace('#','@'));

 // string.includes

 let txt = "Hello world! welcome to the universe";
 console.log(txt.includes('world!'));

 // string.indexOf

 let text = 'i am learning Javascript in depth';
 console.log(text.indexOf('Javascript'));

 //string.slice

 let sentance = 'A quick brown fox jumps over the lazay dog';
  let newSen = sentance.slice(7,17);
  console.log(newSen);
  

