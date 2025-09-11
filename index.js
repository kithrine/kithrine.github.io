// Get elements by their ID's
const addTaskButton = document.getElementById("addTaskButton")
const addTaskText = document.getElementById("addTaskText")
const listContainer = document.getElementById("listContainer")

// Initialize todo data, { id: 0, task: "todo" }
const tasks = []
const completedTasks = []

// Add click event listener to task add button
const addTask = () => {
  console.log("addTaskButton click", addTaskText.value)
  // Create task record
  const newTask = { id: tasks.length + 1, text: addTaskText.value, status: "Active", priority: "Normal" }
  tasks.push(newTask)
  console.log("newTask", newTask, "tasks", tasks)
  // Clear existing HTML


  // Populate HTML w/ template literal
  const newTaskHTML = `
    <li id="${newTask.id}" class="list-row">
      <div class="text-4xl font-thin opacity-30 tabular-nums">${newTask.id}</div>
      <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
      <div class="list-col-grow">
        <div><div class="badge badge-warning">${newTask.status}</div>
</div>
        <div class="">${newTask.text}</div>
      </div>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
      </button>
    </li>
  `
  listContainer.insertAdjacentHTML("beforeend", newTaskHTML)
  
  // Repopulate entire localStorage with all todos
  console.log("JSON.stringify newTask", JSON.stringify(newTask))
  localStorage.setItem("tasks", JSON.stringify(tasks))


  // Clear form
  addTaskText.value = ""

}

localStorage.getItem("tasks").push(tasks)







//! TASK SCHEMA
// status: "Active", "Completed", "Deleted"
// priority: "Urgent", "High", "Normal", "Low"
