import TodoList from './components/TodoList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />

      <h2>Contact Form</h2>
      <ContactForm />
    </div>
  );
}

export default App;
