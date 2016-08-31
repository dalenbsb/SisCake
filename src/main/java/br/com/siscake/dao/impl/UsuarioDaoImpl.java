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
	private EntityManager em;
	
	@Override
	public void saveUsuario(Usuario usuario){
		em.persist(usuario);
	}
	
	@Override
	public void updateUsuario(Usuario usuario) {
		em.merge(usuario);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Usuario> findUsuarios(Usuario usuario) {
		
		Query query = em.createQuery(montarConsultaUsuario(usuario));
		
		return (List<Usuario>) query.getResultList();
	}
	
	private String montarConsultaUsuario(Usuario usuario){
		
		StringBuilder hql = new StringBuilder();
		hql.append(" Select ");
		hql.append(" us ");
		hql.append(" From Usuario us ");
		hql.append(" WHERE 1 = 1 ");
	
		if(usuario != null){
			if(usuario.getId() != null){
				hql.append(" and us.id= "+ usuario.getId());
			}else{
				if(usuario.getNome() != null && !usuario.getNome().isEmpty()){
					hql.append(" and upper(us.nome) like upper('%"+ usuario.getNome() +"%')");
				}
				if(usuario.getCpf() != null && !usuario.getCpf().isEmpty()){
					hql.append(" and us.cpf= '"+ usuario.getCpf() +"'");
				}
			}
		}
		
		return hql.toString();
	}
	
	@Override
	public Usuario findUsuarioById(Long idUsuario) {
		return em.find(Usuario.class, idUsuario);
	}
	
	@Override
	public void deleteUsuario(Long idUsuario) {
		Usuario usuario = findUsuarioById(idUsuario);
		em.remove(usuario);
	}

}
