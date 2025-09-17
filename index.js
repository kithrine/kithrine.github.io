//* GRAB ELEMENTS BY THEIR ID'S
const addTaskButton = document.getElementById("addTaskButton")
const addTaskText = document.getElementById("addTaskText")
const listContainer = document.getElementById("listContainer")
const taskStatusBadge = document.getElementById("task-status-badge")


//* INITIALIZE TASK DATA AND GRAB ANY CURRENT TASKS SAVED IN LOCAL STORAGE
const tasks = JSON.parse(localStorage.getItem("tasks")) || []
const completedTasks = []

//* SVG ICONS
const editIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 640 640"><path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z"/></svg>`

const checkmarkIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/></svg>`

const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 640 640"><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"/></svg>`


//* BUILD TODO LIST
const buildTodoList = (task) => {
  console.log("task.status", task.status)
 
  return `
      <li id="${task.id}" class="list-row">
        <div id="task-id" class="text-4xl font-thin opacity-30 tabular-nums">${task.id}</div>
        <div class="list-col-grow">
          <div>
            <div id="task-status-badge" class="badge ${task.status === "Completed" ? "badge-success" : task.status === "Deleted" ? "badge-error" : "badge-warning"}">${task.status}</div>
          </div>
            <input id="editInput-${task.id}" type="text" placeholder="Edit task..." class="input input-sm hidden" value="${task.text}" />
            <div id="task-text-${task.id}" class="">${task.text}</div>
          </div>
          <button onclick="handleEditTask(${task.id})" class="btn btn-square btn-ghost">
           ${editIcon}
          </button>
          <button class="btn btn-square btn-ghost">
            ${checkmarkIcon}
          </button>
      <button class="btn btn-square btn-ghost">
        ${deleteIcon}
      </button>
        </li>
      `
}

//* LOAD DATA FROM LOCAL STORAGE
if (tasks.length > 0) {
  tasks.forEach(task => {
    // Add to HTML
    listContainer.insertAdjacentHTML("beforeend", buildTodoList(task))
    })
}


//* ADD NEW TASK
const handleAddTask = () => {
  console.log("addTaskButton click", addTaskText.value)
  // Create task record
  const newTask = { id: tasks.length + 1, text: addTaskText.value, status: "Active", priority: "Normal" }
  tasks.push(newTask)
  console.log("newTask", newTask, "tasks", tasks)
  
  // Populate new task item into todo list by pushing new task into list build function (as to not have repeating template literal HTML code in 2 places)
  const newTaskHTML = buildTodoList(newTask)
  listContainer.insertAdjacentHTML("beforeend", newTaskHTML)
  
  // Repopulate entire localStorage with all tasks
  localStorage.setItem("tasks", JSON.stringify(tasks))
  // console.log("JSON.stringify newTask", JSON.stringify(newTask))

  // Clear form
  addTaskText.value = ""
  // Re-disable 'Add Task' button
  addTaskButton.setAttribute("disabled", "")
}

//* EDIT TASK
let editButton = ""
const handleEditTask = (id) => {
  // Get task info
  const taskText = document.getElementById(`task-text-${id}`)
  const editInput = document.getElementById(`editInput-${id}`)
  const taskIndex = tasks.findIndex(task => task.id === id)

  if (editButton === "") {
    editButton = "edit"
    editInput.classList.remove("hidden")
    taskText.classList.add("hidden")
  } else {
    editButton = ""
    let newTaskText = editInput.value
    tasks[taskIndex].text = newTaskText
    localStorage.setItem("tasks", JSON.stringify(tasks))
    taskText.innerHTML = newTaskText
    editInput.classList.add("hidden")
    taskText.classList.remove("hidden")
  }
}

//* DELETE/REMOVE TASK (ARCHIVE)

//* COMPLETE TASK (ARCHIVE)

//* DISABLE 'ADD TASK' BUTTON IF NO TEXT IN INPUT FIELD
addTaskText.addEventListener("input", () => {
  if (addTaskText.value !== "") {
    // addTaskButton.classList.remove("btn-disabled")
    addTaskButton.removeAttribute("disabled")
  } else {
    // addTaskButton.classList.add("btn-disabled")
    addTaskButton.setAttribute("disabled", "")
  }
})




//! TASK SCHEMA
// status: "Active", "Completed", "Deleted"
// priority: "Urgent", "High", "Normal", "Low"
