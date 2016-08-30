package br.com.siscake.visao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.siscake.modelo.Usuario;
import br.com.siscake.service.UsuarioService;

@Controller
@RequestMapping("/manterUsuario")
public class UsuarioVisao {
	
	private static final String JSON = MediaType.APPLICATION_JSON_VALUE;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(method = RequestMethod.GET, produces = JSON)
	public ResponseEntity<List<Usuario>> listAll() {
		return new ResponseEntity<List<Usuario>>(usuarioService.findUsuarios(null), HttpStatus.OK);
	}
	
	@RequestMapping(value="/saveUsuario", method = RequestMethod.POST, consumes = JSON)
	@ResponseBody
	public void saveUsuario(Usuario usuario){
		
		if(usuario.getId() == null){
			usuarioService.saveUsuario(usuario);
		}else{
			usuarioService.updateUsuario(usuario);
		}
	}

}
