package br.com.siscake.repositorio;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.siscake.modelo.Usuario;


public interface UsuarioRepositorio extends PagingAndSortingRepository<Usuario, Long>{

}
