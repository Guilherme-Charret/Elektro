const {Router} = require("express");
import UsuarioController from "../controllers/usuarioController";
import CarrinhoController from "../controllers/carrinhoController";
import ProdutoController from "../controllers/produtoController";
import FavoritosController from "../controllers/favoritosController";

const router = Router();

router.post("/usuarios", UsuarioController.criarUsuario);
router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.buscarUsuario);
router.put("/usuarios/:id", UsuarioController.atualizarUsuario);
router.delete("/usuarios/:id", UsuarioController.deletarUsuario);

router.post("/carrinho", CarrinhoController.adicionarProduto);
router.delete("/carrinho", CarrinhoController.removerProduto);
router.get("/carrinho/:idUsuario", CarrinhoController.visualizarCarrinho);

router.post("/produtos", ProdutoController.criarProduto);
router.put("/produtos/:idProduto", ProdutoController.atualizarProduto);
router.delete("/produtos/:idProduto", ProdutoController.deletarProduto);
router.get("/produtos", ProdutoController.listarProdutos);
router.get("/produtos/:idProduto", ProdutoController.buscarProduto);

router.post("/favoritos", FavoritosController.adicionarFavorito);
router.delete("/favoritos", FavoritosController.removerFavorito);
router.get("/favoritos/:idUsuario", FavoritosController.listarFavoritos);


export default router;

