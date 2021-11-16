class Todo {
  id: string;
  text: string;

  constructor(textData: string) {
    this.id = new Date().toISOString();
    this.text = textData;
  }
}

export default Todo;
