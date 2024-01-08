// import Image from "next/image";
// import styles from "./page.module.css";
import ClassComponent from "./components/classComponent";
import FunctionalComponent from "./components/functionalComponent";
import Todo from "./components/todos";

export default function Home() {
  return (
    <div>
      <ClassComponent />
      <hr />
      <FunctionalComponent />
      <hr />
      <Todo />
    </div>
  );
}
