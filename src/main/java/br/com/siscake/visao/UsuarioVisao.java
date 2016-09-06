package br.com.siscake.visao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.siscake.modelo.Usuario;
import br.com.siscake.service.UsuarioService;

/**
 * @author Dalembert Menezes
 * @version 1.0
 *
 */
@Controller
@RequestMapping("/manterUsuario")
public class UsuarioVisao {
	
	private static final String JSON = MediaType.APPLICATION_JSON_VALUE;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value="/findAll",method = RequestMethod.GET, produces = JSON)
	public ResponseEntity<List<Usuario>> findAll() {
		List<Usuario> listUsuario = usuarioService.findUsuarios(null);
		return new ResponseEntity<List<Usuario>>(listUsuario, HttpStatus.OK);
	}
	
	@RequestMapping(value="/findUsuarioByParam",method = RequestMethod.POST, produces = JSON, consumes = JSON)
	public ResponseEntity<List<Usuario>> findUsuarioByParam(@RequestBody Usuario usuario) {
		List<Usuario> listUsuario = usuarioService.findUsuarios(usuario);
		return new ResponseEntity<List<Usuario>>(listUsuario, HttpStatus.OK);
	}
	
	@RequestMapping(value="/findUsuarioById/{idUsuario}", method = RequestMethod.GET, produces = JSON)
	public ResponseEntity<Usuario> findUsuarioById(@PathVariable("idUsuario") Long idUsuario) {
		Usuario usu = usuarioService.findUsuarioById(idUsuario);
		return new ResponseEntity<Usuario>(usu, HttpStatus.OK);
	}
	
	@RequestMapping(value="/saveUsuario", method = RequestMethod.POST, consumes = JSON)
	@ResponseBody
	public void saveUsuario(@RequestBody Usuario usuario){
		
		if(usuario.getId() == null){
			usuarioService.saveUsuario(usuario);
		}else{
			usuarioService.updateUsuario(usuario);
		}
	}
}
