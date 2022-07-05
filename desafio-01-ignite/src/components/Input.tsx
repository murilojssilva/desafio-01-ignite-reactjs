import styles from "./Input.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Tasks {
  tasks: string[];
  setTasks: any;
}

export function Input({ tasks, setTasks }: Tasks) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isTaskEmpty = newTask.length === 0;

  return (
    <div className={styles.inputBox}>
      <form onSubmit={handleCreateNewTask}>
        <input
          onChange={handleNewTaskChange}
          name="task"
          value={newTask}
          onInvalid={handleNewTaskInvalid}
          required
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
        <button type="submit" disabled={isTaskEmpty}>
          Criar
          <PlusCircle size={14} />
        </button>
      </form>
    </div>
  );
}
