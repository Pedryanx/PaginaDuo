function EditarLivros(id, elementos) {

    const ids = id;
    const nomeUser = elementos;
    localStorage.setItem('meu id', ids)
    localStorage.setItem('meu nome', nomeUser.NomeUsuario)
  
    window.location.href = "../usuario/usuario.html"
  }