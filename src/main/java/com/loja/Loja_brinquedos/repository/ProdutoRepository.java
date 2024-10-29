package com.loja.Loja_brinquedos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.loja.Loja_brinquedos.model.Produto;

public interface ProdutoRepository extends MongoRepository<Produto, String> {
}