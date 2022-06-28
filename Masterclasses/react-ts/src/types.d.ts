// "filename".d.ts va permetre de définir les types globaux qui sont accessibles depuis partout

interface Todo {
  id: number | string;
  text: String;
  done: boolean;
}

type Toggle = (item: Todo) => void;
