import Header from "./components/Header";
import styles from './styles/Content.module.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className={styles.content}>
        <aside className={styles.content__aside}>
          <p>Тип</p>
          
        </aside>
      </div>
    </div>
  );
}

export default App;
