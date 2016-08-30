package br.com.siscake.modelo.enums;

public enum GeneroEnum {
	
	M("Masculino"), 
	F("Feminino");

	public String descricao;

	private GeneroEnum(String descricao) {
		this.descricao = descricao;
	}
}
