
let toDo = document.querySelector('.toDo');
let formDiv = document.querySelector('.formDiv');
let plus = document.querySelector('.plus');
let button = document.querySelector('.dobavit');
let input = document.querySelector('.inputText');
let a = document.querySelector('.x');
function addInfo(){
    formDiv.style.display = 'none';
    if(input.value!==" "){
        event.preventDefault();
        toDo.append(ul);
        li = document.createElement('li');
        ul.appendChild(li);
        ul.style.border = '1px solid #c4c4c4';
        li.textContent = input.value;
        cancelListText = document.createElement('p');
        cancelListText.textContent = 'x';
        cancelListText.classList.add('x');
        li.appendChild(cancelListText);     
    }
     cancelListText.addEventListener('click',(e)=>{
            e.preventDefault();
            e.target.parentElement.remove();
            if(ul.childElementCount == 0){
              ul.style.border = '0'; 
            }  
        });  
        input.value = " ";
}
function addMyList(){
    event.preventDefault();
    formDiv.style.display = 'flex';
}
function deleteInputText(){
    input.value = "";
}
let ul = document.querySelector('ul');
let sortImage = document.querySelector('.sortimg');
let flag = true;

function sortList() {
    const lis = Array.from(ul.querySelectorAll('li'));
    lis.sort((a, b) => {
        const textA = a.innerText.toLowerCase();
        const textB = b.innerText.toLowerCase();
        return flag ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });
    ul.innerHTML = '';
    lis.forEach(li => ul.appendChild(li));
    flag = !flag;
    if (flag) {
        sortImage.src = "sort.svg";
        sortImage.alt = "sort";
    } else {
        sortImage.src = "sort2.svg";
        sortImage.alt = "sort2";
    }
}
sortImage.addEventListener('click', sortList);
sortImage.addEventListener('mouseout', () => {
    if (!flag) {
        sortImage.src = "sort2.svg";
    } else {
        sortImage.src = "sort.svg";
    }
});

sortImage.addEventListener('mouseover', () => {
    if (!flag) {
        sortImage.src = "sort2up.svg";
    } else {
        sortImage.src = "sortup.svg";
    }
});
button.addEventListener('click',addInfo);
plus.addEventListener('click',addMyList);
a.addEventListener('click',deleteInputText);