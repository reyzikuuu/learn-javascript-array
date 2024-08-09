const nameList = [];

document.querySelector('.input-name').onsubmit = function (event) {
    
    event.preventDefault();

    const name = document.forms['nameForm']['name'].value;

    nameList.push(name);

    document.forms['nameForm'].reset();

    console.info(nameList);
  
};