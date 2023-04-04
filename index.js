document.addEventListener("DOMContentLoaded", () => { // charge la page avant de faire le js
    document.querySelector('#push').addEventListener("click", () => {
        if (document.querySelector('#newtask input').value.length == 0) {
            alert("Le champ est vide, remplis-le Sun!!!!")
        }
        else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span class="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="btn modify">Modifier</button>
                    <button class="btn delete">Supprimer</button>
                </div>
            `;

            const current_tasks = document.querySelectorAll(".delete");
            for (let i = 0; i < current_tasks.length; i++) {
                current_tasks[i].addEventListener('click', function() {
                    this.parentNode.remove();
                });
            }

            const modify_tasks = document.querySelectorAll(".modify");
            for (let i = 0; i < modify_tasks.length; i++) {
                modify_tasks[i].addEventListener('click', function() {
                    const taskname = this.parentNode.querySelector('.taskname');
                    const newname = prompt("Modifier la tâche", taskname.innerText);
                    if (newname !== null && newname !== '') {
                        taskname.innerText = newname;
                    }
                });
            }

            document.querySelector('#newtask input').value = ''; // vide le champ input
        }
    });

    // Ajoute un événement de clic sur la touche Entrée
    document.querySelector('#newtask input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Empêche la soumission du formulaire
            e.preventDefault();

            if (document.querySelector('#newtask input').value.length == 0) {
                alert("Kindly Enter Task Name!!!!")
            }

            else {
                document.querySelector('#tasks').innerHTML += `
                    <div class="task">
                        <span class="taskname">
                            ${document.querySelector('#newtask input').value}
                        </span>
                        <button class="btn modify">Modifier</button>
                        <button class="btn delete">Supprimer</button>
                    </div>
                `;

                const current_tasks = document.querySelectorAll(".delete");
                for (let i = 0; i < current_tasks.length; i++) {
                    current_tasks[i].addEventListener('click', function() {
                        this.parentNode.remove();
                    });
                }

                const modify_tasks = document.querySelectorAll(".modify");
                for (let i = 0; i < modify_tasks.length; i++) {
                    modify_tasks[i].addEventListener('click', function() {
                        const taskname = this.parentNode.querySelector('.taskname');
                        const newname = prompt("Modifier la tâche", taskname.innerText);
                        if (newname !== null && newname !== '') {
                            taskname.innerText = newname;
                        }
                    });
                }

                document.querySelector('#newtask input').value = ''; // vide le champ input
            }
        }
    });
});
