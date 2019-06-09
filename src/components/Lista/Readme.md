Lista das tools cadastradas

Este componente recebe um array de tools para exibir e uma função para chamar o modal de excluir tool

```js static
import React from "react";
import List from "../../components/Lista/index";
export default class Main extends Component {
  render() {
    return (
      <List
        repositories={this.state.repositories}
        acao={this.openModal2}
        deletar={this.deletar}
      />
    );
  }
}
```
