const button = document.querySelector(`button`);

//   -Grab ul element inside of which facts will be displayed
const ul = document.querySelector(`ul`);

button.addEventListener(`click`, async () => {
// Display random cat fact when user clicks button

  // How do you remove/replace an element? I can't do it inside try because the expection triggers the catch. I can't do it here because newLI is not defined or it's not a node yet or something.
  // if (ul.hasChildNodes) {
  //   ul.removeChild(ul.firstElementChild);
  // }

  //   -Remember to put try/catch around function
  try {
    
    //   -Fetch API (fetch is inside an await function, which is inside an async function)
    const response = await fetch (`https://catfact.ninja/fact`);
    const catFact = await response.json();

    //   -Create new list item
    const newLI = document.createElement('li');

    //   -Put the cat fact inside the new list item
    newLI.innerText = catFact.fact;

    //   -Append new list item in ul
    ul.append(newLI);
    
  } catch (error) {
    // Add this message to the page if the fetch fails: 
    const newP = document.createElement('p');
    newP.innerText = `Something went wrong fetching a cat fact. It's your fault. I'm suing you for breaking my website.`;
    ul.append(newP);
  } 
    
})