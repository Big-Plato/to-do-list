const input = document.querySelectorAll('mark-todo'); 

export function finishTodo () {

    input.forEach((e) => {
        console.log(e)
        e.addEventListener('click', () => {
            console.log('yes');
        });
    });
}

