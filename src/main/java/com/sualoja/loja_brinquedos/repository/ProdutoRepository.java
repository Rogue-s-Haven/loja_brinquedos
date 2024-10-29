package com.sualoja.loja_brinquedos.repository;

import com.sualoja.loja_brinquedos.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
