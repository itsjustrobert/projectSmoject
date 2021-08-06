



// After each submission



// Add confidence entry as a list item (li) element to the unordered list
// Add entry text as a list item (li) element to the unordered list
// Use a function that you implement to iterate the list of entries in the array, and using template literals, render all 
// of the entries in the console (Note: Log each property of each entry item. NOT full array or entry object)
// Allow the user to continue to submit entries as long as they choose until they enter 'quit' (optionally add support 
// to stop entering entries if they click cancel in prompt dialog)
//  (Links to an external site.)Examples:
// /*  Purpose: create a reflection journal entry object
//     Arguments: create_date, entry, confidence
// */ 
// function addJournalEntry(create_date, entry, confidence)
// {
//       // Create a new journal object
//       let newEntry = {
//              creation_date: create_date, 
//              journal_entry: entry,
//              confidence_level: confidence              
//       }

//       // Add the entry to the Array and to the DOM (u do this...)

//       // Call your logJournalEntries function to log all entries in the array to the console
// }

// /*
//     Purpose: To render all reflection journal entries to the console
// */
// function logJournalEntries()
// {
//     // iterate your entries array and log each entry (and each individual property) in the console
// }
// Use CSS to format the entries on your web page as you choose and be creative!
// Stretch Goals
// Experiment with using the Bootstrap CSS library to enhance the look and feel of your project Bootstrap Introduction (Links to an external site.)
// Add the capability to delete existing entries by their index number
// Add the capability to edit existing entries by their index number and update the entry in the array
//  (Links to an external site.)General Project Information:
// The Reflections Journal project will leverage the development concepts you learn in class and apply them to
//  build a Reflections Journal web application.

//  (Links to an external site.)Guidelines:
// This is an individual project and Students should perform all work independently
// You can use your past notes and online sources as necessary, but first, try to implement the solution based on your 
// current knowledge noting any areas where you get stuck so you can go back and review those concepts
// Instructors will assist students, however, it is up to the individual student to come up with the answers
// You will present your solution to the class and field any questions about your implementation (presentation 5 - 10 mins)
// Commit and Push your work often (you must push a version of your project by 4 pm the day of the project)
// NOTE: Final submissions must be pushed to your GitHub repo before Thursday 10 PM 8/5/2021
// Projects will be pulled promptly at 10:00 PM!
































function main(){
// alert('hello ');



// Use JavaScript to create Reflection object instances and display them in the console AND browser
// definitely going to have to create a class || factory
    class JournalEntryClass{
        createJournal(creationDate, journalEntry,confidenceLevel){
        this.creationDate=creationDate;
        this.journalEntry=journalEntry;
        this.confidenceLevel=confidenceLevel;
    }
};
// ==============================================================================
// Add the entry to the journalEntries array
const journalList=[];
// ==============================================================================
// create some elements
// ==============================================================================

// get the container and append it to the body
let container = document.getElementById('container');
// append the container to the body
document.body.appendChild(container);

// Add an unordered list (ul) to the DOM
let unorderedList=document.createElement('ul');
// Add create date as a list item (li) element to the unordered list
let listItem=document.createElement('li');


// add a class list for the list items;
listItem.classList.add('listed');

let listText=document.createTextNode('list item');
listItem.appendChild(listText);

// append the list items to the list
unorderedList.appendChild(listItem);
container.appendChild(unorderedList);

let h1=document.createElement('h1');
h1.classList.add('headers');
let h1Text=document.createTextNode('hi im your h1');
h1.appendChild(h1Text);
container.append(h1);
// ====================================================================================
// Use JavaScript prompts for entering Reflections into your journal
let reflections=prompt('hello how is your day....');   //need to correct the output
// Creation Date - Prompt for a date
let creation=prompt('Please enter the date!');

// Implement the JavaScript necessary to process and validate the submitted data;
// rate your confidence
let confidence=prompt('Please rate your confidence \n Low, Medium, or High');
// probably need some conditionals here
if(confidence=='low'){
    console.log('low');

}
else if(confidence=='medium'){
    console.log('medium');

}
else if(confidence=='high'){
    console.log('high');
};








// // ==============================================================================

// Use an HTML form instead of prompt() for a user to make new entries

let form=document.createElement('form');
form.setAttribute('method','post')
form.setAttribute('action',"submit");
let i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");
form.appendChild(i);
container.appendChild(form);










// Output your journal entries in an HTML table
// // ==============================================================================





//  (Links to an external site.)Requirements:
// When the user clicks the 'Add Journal Entries' button, use JavaScript prompts for entering reflections consisting of the following items:

// Confidence Level - Prompt the user to specify Low, Medium, and High confidence level 
// (your implementation should handle any entry regardless of upper or lowercase and any entry that does not match one of the 3 options
//  should be rejected with an error message alert and the user should be prompted to re-enter their confidence level value)
// Describe your confidence level in your skills at the time of posting
// Journal Entry - Prompt the user for the text for your reflection
// Enter in as much text as necessary about what you learned, how you felt, and plans for the upcoming days
// Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK, add post to 
// the array, otherwise if they click cancel start over with prompts and entry)
// Define a JavaScript object literal that will represent a journal entry
// Implement JavaScript to handle the values entered for the journal entry
// When a journal entry is submitted/confirmed, create a new journalEntry object and add it to a journalEntries array

}
main();

