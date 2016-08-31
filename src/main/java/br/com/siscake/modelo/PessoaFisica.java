package br.com.siscake.modelo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Table(name="tb_pessoa")
@Entity
@Inheritance(strategy=InheritanceType.JOINED)
public class PessoaFisica implements Serializable {

	private static final long serialVersionUID = 3474224153881097464L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name="ds_nome", length=255)
	private String nome;
	
	@Column(name="nu_cpf", length=11)
	private String cpf;
	
	@Column(name="email", length=255)
	private String dsEmail;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCpf() {
		return cpf;
	}
	
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getDsEmail() {
		return dsEmail;
	}
	
	public void setDsEmail(String dsEmail) {
		this.dsEmail = dsEmail;
	}
	
}
