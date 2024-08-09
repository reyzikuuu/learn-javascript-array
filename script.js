const nameList = [];

document.querySelector('.input-name').onsubmit = function (event) {
    
    event.preventDefault();

    const name = document.forms['nameForm']['name'].value;

    nameList.push(name);

    // document.forms['nameForm'].reset(); // reset() => Memakai method Form Element
    document.querySelector('.input-name').reset(); // reset() => Memakai query selector
    console.info(nameList);
  
};