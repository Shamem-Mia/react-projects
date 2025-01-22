import Styles from "./index.module.css";
function TodoItem({ todo, fetchTodoId, todoDetails, closeDetailsHandle }) {
  console.log(todo);
  const findId = () => {
    fetchTodoId(todo.id);
  };

  return (
    <>
      <div className={Styles.boxItem}>
        <div className={Styles.card}>
          <h4>{todo.id}</h4>

          <button onClick={findId} className={Styles.btn}>
            see details
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
