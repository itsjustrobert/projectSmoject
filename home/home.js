
//  user data
// array to store the entries
const journalEntriesArray = [];

// class of journal entries
class JournalEntry{
    constructor(creationDate,confidenceLevel,entry){
      this.creationDate = creationDate;
      this.confidenceLevel = confidenceLevel;
      this.entry=entry;
      journalEntriesArray.push(this);
      
      } 
    };


function createEntry() {
    let user = prompt(' hi what is your name?');
    let creationDate = prompt("please enter the today's date");
    let confidenceLevel = prompt('Please rate your confidence... \n Low, Med, or High');
    let entry=prompt('please enter your relections here');
  
 if (creationDate != null && confidenceLevel != null && entry != null) {
    alert(`thank you, ${user} `);
    let newEntry = new JournalEntry(creationDate, confidenceLevel, entry);
    console.log(newEntry);

 } else{
    alert('Please answer all fields.')
    createEntry();
  };

//   manipulate the dom
// make a list with 3 li's
let list = document.createElement('ul');

let dateLi = document.createElement('li');
let dateText = document.createTextNode(creationDate)
dateLi.appendChild(dateText);
list.appendChild(dateLi);


let confidenceLi = document.createElement('li');
let confidenceText = document.createTextNode(confidenceLevel)
confidenceLi.appendChild(confidenceText);
list.appendChild(confidenceLi);


let entryLi = document.createElement('li');
let entryText = document.createTextNode(entry)
entryLi.appendChild(entryText);
list.appendChild(entryLi);
container.appendChild(list);
// 
};
// createEntry();
console.log(journalEntriesArray);

let container = document.getElementById('container');
let btn = document.createElement('button');
container.appendChild(btn);
let btnText = document.createTextNode('NEW ENTRY');
btn.appendChild(btnText);
btn.addEventListener('click',createEntry);

