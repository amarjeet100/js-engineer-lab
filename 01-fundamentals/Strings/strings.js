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

 // second example
 const tagWord ='The Odin project- is one of best resources to learn code other than resources';

 const firstComment = tagWord.indexOf('resources');
 const secondComment = tagWord.indexOf('resources',firstComment + 1);
 console.log(firstComment);
 console.log(secondComment);

 

 //string.slice

 let sentance = 'A quick brown fox jumps over the lazay dog';
  let newSen = sentance.slice(7,17);
  console.log(newSen);
  


  // practice 
const cities = ['lonDon','manCHESTer', 'BiRmiNGHAM','liVERpoOL'];

for (const city of cities) {
   const lower = city.toLowerCase();
   const firstLetter = lower.slice(0,1);
   const captilized = lower.replace(firstLetter,firstLetter.toUpperCase());
   console.log(captilized);
   

}



const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
   const code = station.slice(0,3);
   const semiIndex = station.indexOf(';');
   const name = station.slice(semiIndex + 1);
   const finalCode = `${code} : ${name}`;
   console.log(finalCode);
   
   
}



