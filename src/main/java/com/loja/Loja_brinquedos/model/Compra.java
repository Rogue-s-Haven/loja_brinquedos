package com.loja.Loja_brinquedos.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "compras")
public class Compra {
    
    @Id
    private String id;
    private List<Produto> produtos;
    private double valorTotal;

    public Compra(List<Produto> produtos, double valorTotal) {
        this.produtos = produtos;
        this.valorTotal = valorTotal;
    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }
}