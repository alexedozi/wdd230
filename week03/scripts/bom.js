const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


let chapterArray = getChapterList () || [];
chapterArray.forEach(chapter => {displayList(chapter);
  });

button.addEventListener('click', () => { 
    if (input.value != ''){
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value ='';
        input.focus();
    }
   
  //const myItem = input.value;
  //input.value = '';

  //const listItem = document.createElement('li');
  //const listText = document.createElement('span');
  //const listBtn = document.createElement('button');

  //listItem.appendChild(listText);
  //listText.textContent = myItem;
  //listItem.appendChild(listBtn);
  //listBtn.textContent = '❌';
  //list.appendChild(listItem);

  //listBtn.addEventListener('click', () => {
    //list.removeChild(listItem);
    //input.focus();
  
  });
  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList(){
    localStorage.setItem('BOMList',JSON.stringify(chapterArray));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem('BOMList'));
}
  
function deleteChapter(){
    chapter = chapter.slice(0, chapter.lenght -1);
    chapterArray = chapterArray.filter((item) => item !==chapter);
    setChapterList();
}



//console.log(JSON.stringify());

//});