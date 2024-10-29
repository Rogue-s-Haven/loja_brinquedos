package com.loja.Loja_brinquedos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loja.Loja_brinquedos.model.Produto;
import com.loja.Loja_brinquedos.service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoService.listarTodos();
    }

    @PostMapping
    public Produto adicionarProduto(@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }
}
