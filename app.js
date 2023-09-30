function removeA(arr) {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}

window.addEventListener("load", () => {
  const ltasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const form = document.querySelector("#add");
  const input = document.querySelector(".add-main-text");
  const tasks = document.querySelector("#tasks");

  if (ltasks) {
    for (i in ltasks) {
      const task = document.createElement("div");
      task.classList.add("task");

      const task_checkbox = document.createElement("input");
      task_checkbox.type = "checkbox";
      task_checkbox.classList.add("task-checkbox");

      const task_text = document.createElement("p");
      task_text.classList.add("task-text");
      task_text.innerText = ltasks[i];

      const task_edit = document.createElement("i");
      task_edit.className = "task-edit fa-solid fa-pen-to-square";

      const task_delete = document.createElement("i");
      task_delete.className = "task_delete fa-solid fa-trash";

      task.appendChild(task_checkbox);
      task.appendChild(task_text);
      task.appendChild(task_edit);
      task.appendChild(task_delete);
      tasks.appendChild(task);

      task_edit.addEventListener("click", () => {
        const index = ltasks.indexOf(task_text.innerText);
        if (task_edit.className == "task-edit fa-solid fa-pen-to-square") {
          task_text.contentEditable = true;
          task_text.focus();
          removeA(ltasks, task_text.innerHTML);
          localStorage.setItem("tasks", JSON.stringify(ltasks));
          task_edit.className = "task-edit fa-solid fa-check";
        } else {
          task_text.contentEditable = false;
          task_edit.className = "task-edit fa-solid fa-pen-to-square";
          ltasks.splice(index, 0, task_text.innerText);
          localStorage.setItem("tasks", JSON.stringify(ltasks));
        }
      });

      task_delete.addEventListener("click", () => {
        tasks.removeChild(task);
        removeA(ltasks, task_text.innerText);
        localStorage.setItem("tasks", JSON.stringify(ltasks));
      });

      task_checkbox.addEventListener("change", () => {
        setTimeout(() => {
          tasks.removeChild(task);
          removeA(ltasks, task_text.innerText);
          localStorage.setItem("tasks", JSON.stringify(ltasks));
        }, 800);
      });
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task_text_value = input.innerHTML;

    if (!task_text_value) {
      alert("Please add a task");
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const task_checkbox = document.createElement("input");
    task_checkbox.type = "checkbox";
    task_checkbox.classList.add("task-checkbox");

    const task_text = document.createElement("p");
    task_text.classList.add("task-text");
    task_text.innerText = task_text_value;

    const task_edit = document.createElement("i");
    task_edit.className = "task-edit fa-solid fa-pen-to-square";

    const task_delete = document.createElement("i");
    task_delete.className = "task_delete fa-solid fa-trash";

    task.appendChild(task_checkbox);
    task.appendChild(task_text);
    task.appendChild(task_edit);
    task.appendChild(task_delete);
    tasks.appendChild(task);
    ltasks.push(task_text.innerText);
    localStorage.setItem("tasks", JSON.stringify(ltasks));

    task_edit.addEventListener("click", () => {
      const index = ltasks.indexOf(task_text.innerText);
      if (task_edit.className == "task-edit fa-solid fa-pen-to-square") {
        task_text.contentEditable = true;
        task_text.focus();
        removeA(ltasks, task_text.innerHTML);
        localStorage.setItem("tasks", JSON.stringify(ltasks));
        task_edit.className = "task-edit fa-solid fa-check";
      } else {
        task_text.contentEditable = false;
        task_edit.className = "task-edit fa-solid fa-pen-to-square";
        ltasks.splice(index, 0, task_text.innerText);
        localStorage.setItem("tasks", JSON.stringify(ltasks));
      }
    });

    task_delete.addEventListener("click", () => {
      tasks.removeChild(task);
      removeA(ltasks, task_text.innerText);
      localStorage.setItem("tasks", JSON.stringify(ltasks));
    });

    task_checkbox.addEventListener("change", () => {
      setTimeout(() => {
        tasks.removeChild(task);
        removeA(ltasks, task_text.innerText);
        localStorage.setItem("tasks", JSON.stringify(ltasks));
      }, 800);
    });
  });
});
