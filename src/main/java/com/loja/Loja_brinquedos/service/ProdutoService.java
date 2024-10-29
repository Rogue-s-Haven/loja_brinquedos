package com.loja.Loja_brinquedos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loja.Loja_brinquedos.model.Produto;
import com.loja.Loja_brinquedos.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }
}