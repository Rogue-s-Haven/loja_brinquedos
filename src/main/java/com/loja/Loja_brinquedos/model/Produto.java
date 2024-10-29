package com.loja.Loja_brinquedos.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "produtos")
@Data
public class Produto {
    @Id
    private String id;
    private String nome;
    private String descricao;
    private double preco;
    private String imagemUrl;
    
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getImagemUrl() {
		return imagemUrl;
	}
	public void setImagemUrl(String imagemUrl) {
		this.imagemUrl = imagemUrl;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}
}