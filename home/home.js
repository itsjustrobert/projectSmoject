
//  user data
// array to store the entries
const journalEntriesArray = [];

// class of journal entries
class JournalEntry{
    constructor(title,confidenceLevel,entry){
      this.title = title;
      this.confidenceLevel = confidenceLevel;
      this.entry=entry;
      journalEntriesArray.push(this);
      
      } 
    };


function createEntry() {
    let user = prompt(' hi what is your name?');
    let title = prompt("please name this entry");
    let confidenceLevel = prompt('Please rate your confidence... \n Low, Med, or High');
    let entry=prompt('please enter your relections here');
  
 if (title != null && confidenceLevel != null && entry != null) {
    alert(`thank you, ${user} `);
    let newEntry = new JournalEntry(title, confidenceLevel, entry);
    console.log(newEntry);

 } else{
    alert('Please answer all fields.')
    createEntry();
  };

//   manipulate the dom
// make a list with 3 li's
let newDate = new Date;
let listDiv = document.getElementById('list');
let container = document.getElementById('container');
let list = document.createElement('ul');
// create the header 
let header = document.createElement('h1');
// create a text node to the header
let headerText = document.createTextNode('On ' + newDate + ':');
// append the text-node to the h1 element
header.appendChild(headerText);
// append h1 to the list div;
listDiv.appendChild(header);

let dateLi = document.createElement('li');
let dateText = document.createTextNode(`Title: ${title}`)
dateLi.appendChild(dateText);
list.appendChild(dateLi);


let confidenceLi = document.createElement('li');
let confidenceText = document.createTextNode(`Confidence Level: ${confidenceLevel}`)
confidenceLi.appendChild(confidenceText);
list.appendChild(confidenceLi);


let entryLi = document.createElement('li');
let entryText = document.createTextNode(`New Entry: ${entry}`)
entryLi.appendChild(entryText);
list.appendChild(entryLi);

// append the list
listDiv.appendChild(list);
// 
};
// createEntry();
console.log(journalEntriesArray);
// make the button and append it to the container
let container = document.getElementById('container');
let btn = document.createElement('button');
container.appendChild(btn);
let btnText = document.createTextNode('NEW ENTRY');
btn.appendChild(btnText);
btn.addEventListener('click',createEntry);

