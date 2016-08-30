package br.com.siscake.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import br.com.siscake.dao.UsuarioDao;
import br.com.siscake.modelo.Usuario;

@Repository
public class UsuarioDaoImpl  implements UsuarioDao {

	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public void saveUsuario(Usuario usuario){
		manager.persist(usuario);
	}
	
	@Override
	public void updateUsuario(Usuario usuario) {
		manager.merge(usuario);
	}
	
	@Override
	public List<Usuario> findUsuarios(Usuario usuario) {
		//TODO - criar query
		Query query = manager.createQuery("");
		
		return query.getResultList();
	}
	
	@Override
	public Usuario findUsuarioById(Long idUsuario) {
		return manager.find(Usuario.class, idUsuario);
	}
	
	@Override
	public void deleteUsuario(Long idUsuario) {
		Usuario usuario = findUsuarioById(idUsuario);
		manager.remove(usuario);
	}

}
