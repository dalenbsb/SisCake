package br.com.siscake.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.siscake.modelo.Usuario;


//@Repository
//public interface UsuarioDao extends PagingAndSortingRepository<Usuario, Long>{
public interface UsuarioDao{
	
	/**
	 * Método responsável gravar o usuário na base de dados
	 * @param usuario
	 */
	public void saveUsuario(Usuario usuario);
	
	
	/**
	 * Método responsável alterar o usuário na base de dados
	 * @param usuario
	 */
	public void updateUsuario(Usuario usuario);
	
	/**
	 * Método resposável por retornar uma lista de usuários de acordo com os parâmetros.
	 * 
	 * @param usuario
	 * @return Lista de usuário - List
	 */
	public List<Usuario> findUsuarios(Usuario usuario);
	
	/**
	 * Método responsável por retornar um usuario da base dados pelo código.
	 * 
	 * @param idUsuario - Long
	 * @return retorna um Usuário - 
	 */
	public Usuario findUsuarioById(Long idUsuario);
	
	/**
	 * Método responsável por excluir da base de dados o usuário, de acordo com o id passado.
	 * 
	 * @param idUsuario
	 */
	public void deleteUsuario(Long idUsuario);

}
