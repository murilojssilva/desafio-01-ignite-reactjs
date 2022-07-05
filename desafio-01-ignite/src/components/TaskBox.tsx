import { useRef, useState } from "react";
import styles from "./TaskBox.module.css";
import clipboardText from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";
import { Input } from "./Input";

export function TaskBox() {
  const ref = useRef(null);

  const [tasks, setTasks] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum inventore impedit ipsa, qui voluptatem nobis vel explicabo saepe, earum ex perferendis aliquam. Aliquam, consectetur? Possimus officiis nam adipisci illo?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, id aliquid eveniet alias sunt ea commodi quisquam quis, quam voluptatum voluptatibus similique. Porro provident perferendis aut sint. Obcaecati, fuga nesciunt.",
  ]);

  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [active, setActive] = useState([false, false]);

  function onDeleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function handleClick(index: number) {
    if (active[index] === true)
      active.map((act, i) => {
        if (i === index) setActive({ ...active, index: false });
      });
    else if (active[index] === false)
      active.map((act, i) => {
        if (i === index) setActive(true);
      });
    active.map((act) => {
      if (act === true) {
        setTasksCompleted(tasksCompleted + 1);
      } else if (act === false) {
        setTasksCompleted(tasksCompleted - 1);
      }
    });
    console.log(tasksCompleted);
  }

  return (
    <div className={styles.taskBox}>
      <Input tasks={tasks} setTasks={setTasks} />
      <header>
        <div>
          <h1>Tarefas criadas</h1>
          <span>{tasks.length}</span>
        </div>
        <div>
          <h1>Concluídas </h1>
          <span>
            {tasks.length === 0 ? 0 : `${tasksCompleted} de ${tasks.length}`}
          </span>
        </div>
      </header>

      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={task} className={styles.task}>
            <div onClick={() => handleClick(index)}>
              <input ref={ref} type="checkbox" />
            </div>

            <p>{task}</p>

            <button
              onClick={() => onDeleteTask(task)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </div>
        ))
      ) : (
        <div className={styles.taskEmpty}>
          <img src={clipboardText} />
          <div>
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}
