function DaftarTodo({ todos, onHapus }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => onHapus(index)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarTodo;
