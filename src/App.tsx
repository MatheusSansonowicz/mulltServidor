import { useState } from "react"
// Importa o componente que exibe a lista de produtos
import { ProductList } from './components/ProdutoList.tsx'
// Importa o formulário de cadastro de produtos
//import { ProductForm } from './components/ProdutoForm.tsx'
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

                {/* Modal que envolve o formulário. Só é exibido se showForm for true }
                <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                    {/* O formulário recebe a função para fechar o modal após o envio }
                    <ProductForm onClose={() => setShowForm(false)} />
                </Modal>

                {/* Componente que exibe a lista dos produtos cadastrados */}
                <ProductList />
            </>
        )
    }

}

export default App
