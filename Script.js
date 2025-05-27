const todoListElem = document.querySelector('#todo-list');
/*const todoListElem skapar en variabel med namnet todoListElem och lagrar det 
hittade HTML-elementet där. På det sättet kan jag använda todoListElem i min kod och manipulera listan, tex lägga till nya <li>-element.
.document = hela HTML-dokumentet. QuerySelector('#todo-list'); letar upp det HTML-element som har id= "todo-list". 
#todo-list är en CSS-selektor; # = söker efter element med just det id-värdet. */

function createTodo(task) { //Skapar en funktion med namnet createTodo som tar emot parametern task (texten för listpunkten.)
    const todoElem = document.createElement('li'); //Skapar nytt <li>element med document.createElement('li') som inte är synligt än. 
    todoElem.textContent = task;//Bestömmer li-texten med hjälp av task; CreateTodo('Äta') blir "Äta" i listan. 
    console.log(todoElem);//Skriver ut nyskapade <li>elementet i konsolen så man ser vad exakt man skapat.
    todoListElem.appendChild(todoElem);/*Addar nyskapade <li>elementet i todoListElem som refererar till <ul id="todo-list">. 
    Nu synligt på webbsidan eftersom det hamnar i listan. */

}
createTodo('The Ancient Celts - Barry Cunliffe'); //Första punkten på listan osv. 
createTodo('Contemporary Britain');
createTodo('Sixty Million Frenchmen cannot be wrong');
createTodo('O século Portugués');