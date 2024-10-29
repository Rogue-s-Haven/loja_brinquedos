package com.loja.Loja_brinquedos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loja.Loja_brinquedos.model.Compra;
import com.loja.Loja_brinquedos.repository.CompraRepository;

@RestController
@RequestMapping("/api/compras")
public class CompraController {

    @Autowired
    private CompraRepository compraRepository;

    @PostMapping
    public Compra registrarCompra(@RequestBody Compra novaCompra) {
        return compraRepository.save(novaCompra);
    }
}