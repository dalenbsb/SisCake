package br.com.siscake.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.siscake.dao.UsuarioDao;
import br.com.siscake.modelo.Usuario;
import br.com.siscake.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	
	@Autowired
	private UsuarioDao usuarioDao;
	
	@Transactional
	@Override
	public void saveUsuario(Usuario usuario){
		usuarioDao.saveUsuario(usuario);
	}
	
	@Transactional
	@Override
	public void updateUsuario(Usuario usuario) {
		usuarioDao.updateUsuario(usuario);
	}
	
	@Override
	public List<Usuario> findUsuarios(Usuario usuario) {
		return usuarioDao.findUsuarios(usuario);	
	}
	
	@Override
	public Usuario findUsuarioById(Long idUsuario) {
		return usuarioDao.findUsuarioById(idUsuario);
	}
	
	@Transactional
	@Override
	public void deleteUsuario(Long idUsuario) {
		usuarioDao.deleteUsuario(idUsuario);
	}
}
