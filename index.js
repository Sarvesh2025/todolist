let todo = [];
let option = prompt("Choose from the given options:"); 
if (option === "new") {
    while (option === "new") {
        let task = prompt("Enter the task");
        todo.push(task);
        for (let ele of todo) console.group(ele);
        option = prompt("Choose from the given options:");
    }
 }
    else if (option === "list") {
    for (let ele of todo) print(ele);
    option = prompt("Choose from the given options:");
    }
   else if (option === "delete") { 
    let toDelete = prompt("Enter the task to be deleted");
        for (let i = 0; i < todo.size(); i++){
            if (todo[i] == toDelete) {
                let f = delete (todo[i]);
                console.log(`The delted task is : ${f}`);
        }
    }
     option = prompt("Choose from the given options:");
}
    else if (option === "quit") {
        console.log("Ok, You can quit the App");
}