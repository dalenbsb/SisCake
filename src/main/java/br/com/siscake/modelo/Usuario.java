package br.com.siscake.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity(name="tb_usuario")
public class Usuario extends PessoaFisica {
	
	private static final long serialVersionUID = 1L;
	
	@Column(name="ds_senha", length=8)
	private String senha;
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
}
