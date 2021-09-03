
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if(inputText === "") {
    alert("入力が空です");
    return
  }

  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
}

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
}

const createIncompleteList = (text) => {
const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    
    addTarget.textContent = null;
    
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromCompleteList(backButton.parentNode);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  
  
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());