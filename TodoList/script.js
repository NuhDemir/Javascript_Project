document.querySelector('#push').onclick = function() {

    if (document.querySelector('#newtask input').nodeValue.lenght == 0) {
        alert("Please Enter a task")
    }
    else{
        document.querySelector('tasks').innerHTML+= `
        <div class="task">
            <span id="taskname">
            ${document.querySelector('newtask input').value}
       </span>

    </div> 
    `;
    } 
}