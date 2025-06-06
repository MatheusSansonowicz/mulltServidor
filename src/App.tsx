import { useState } from "react"
// Importa o componente que exibe a lista de produtos
import { ProductList } from './components/ProdutoList'
// Importa o formulário de cadastro de produtos
import type { produtoForm } from './components/ProdutoForm'
// Importa o componente Modal, que será usado para exibir o formulário como pop-up
import { Modal } from './components/Modal'

function App() {

  const [count, setCount] = useState(0)
    function App() {
        // Cria um estado booleano chamado showForm, que indica se o modal deve ser exibido ou não
        const [showForm, setShowForm] = useState(false)

        // JSX que define a interface do componente
        return (
            <>
                {/* Botão que abre o formulário ao ser clicado */}
                <div style={{ padding: "20px" }}>
                    <button onClick={() => setShowForm(true)}>Novo Produto</button>
                </div>

                <Modal isOpen={showForm} onClose={() => setShowForm(false)}>

                    <produtoForm onClose={() => setShowForm(false)} />
                </Modal>

                {/* Componente que exibe a lista dos produtos cadastrados */}
                <ProductList />
            </>
        )
    }

}

export default App
