function pesquisar() {




    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa= document.getElementById("campo-pesquisa").value
    if(campoPesquisa==""){
        section.innerHTML = "Nada foi encontrado. Voce precisa ser ";
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo="";
    let descricao="";
    let tags="";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        //então faça...
        if(titulo.includes(campoPesquisa) ||
         descrição.includes(campoPesquisa)||
         tags.includes(campoPesquisa)){
    
        resultados += `
            <div class="item-resultado">
       
                <h2>
                 <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link}target="_blank">Mais informações</a>
            </div>
           
                
        `}
    }
    if(!resultados){
        resultados = "Nada foi encontrado";

    }

    section.innerHTML = resultados;

}
