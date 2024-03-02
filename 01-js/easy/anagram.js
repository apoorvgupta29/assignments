/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  function sorted(str) {
    str = str.toLowerCase().split("").sort().join("")
return str
  } 

  sortedstr1 =sorted(str1);
  sortedstr2 =sorted(str2);


  if(sortedstr1===sortedstr2)
  {
    return true;
  }
  else 
  {
    return false;
  }


}

module.exports = isAnagram;

//methord -2
/*
function isAnagram(str1, str2) {
  if(str1.length!= str2.length)
    return false;
    
  str1= str1.toLowerCase();  
  str2= str2.toLowerCase();  
  
  let sorted1= str1.split("").sort();
  let sorted2= str2.split("").sort();

  for(let i=0; i<sorted1.length; i++){
    if(sorted1[i]!== sorted2[i]){
      return false;
    }
  }
  return true;

}
*/