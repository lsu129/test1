//HTML 실행 후 자바 실행
document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.querySelector("input[type='text']");
  const addButton = document.getElementById("submit-btn");
  const todoList = document.getElementById("todo-list");

  //추가 버튼에 클릭 이벤트가 발생 여부
  addButton.addEventListener("click", function () {
    //버튼이 클릭되면 실행될 함수
    const newTodoText = todoInput.value;

    if (newTodoText === "") {
      return;
    }

    //li 생성
    const newLi = document.createElement("li");

    //li 안에 완료 버튼, 삭제 버튼을 생성
    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = newTodoText;//span에 입력받은 텍스트를 넣음

    const finishButton = document.createElement("button");
    finishButton.textContent = "완료";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";

    //li 안에 자식으로 넣기
    newLi.appendChild(todoTextSpan);
    newLi.appendChild(finishButton);
    newLi.appendChild(deleteButton);

    //li를 ul 목록에 자식으로 추가
    todoList.appendChild(newLi);

    //입력창을 비움니다
    todoInput.value = "";
    todoInput.focus();
  });
});


