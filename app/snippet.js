function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


function DNAStrand(dna){
  return dna.replace(/A/gi,'T').replace(/T/gi,'A').replace(/C/gi,'G').replace(/G/gi,'C');
}

function vowelReplace(str){
  return str.replace(/[aeiou]/gi,'');
}

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    var booleanarray=Number(N).toString(2).split("");
    var gap=0,lasFound=0;
    booleanarray.forEach(function(value,index){
        if(value==1){
            gap= (gap < index - lasFound) ? index- lasFound : gap;   
            lasFound=index;

        }
                    
        });
    return gap-1;   
}


function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}