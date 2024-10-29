package com.loja.Loja_brinquedos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.loja.Loja_brinquedos.model.Compra;

public interface CompraRepository extends MongoRepository<Compra, String> {
}