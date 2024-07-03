function validarFormulario() {
    const campos = document.querySelectorAll(".secao__adicionar__formulario__campo input");
    let formularioValido = true;

    campos.forEach(campo => {
        const erro = campo.nextElementSibling;

        if (!campo.value.trim()) {
            erro.innerHTML = `
                <div class="mensagem__erro">
                    <p>⚠︎  obrigatório!</p>
                </div>
            `;
            formularioValido = false;
        } else if (campo.type === "url" && !urlValida(campo.value)) {
            erro.innerHTML = `
                <div class="mensagem__erro">
                    <p>⚠︎ A URL inválida!</p>
                </div>
            `;
            formularioValido = false;
        } else if (campo.value.length < 2 && campo.type === "text") {
            erro.innerHTML = `
                <div class="mensagem__erro">
                    <p>⚠︎ mínimo 2 caracteres!</p>
                </div>
            `;
            formularioValido = false;
        } else {
            erro.textContent = "";
        }
    });

    return formularioValido;
}

function urlValida(url) {
    const padroes = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
    return !!padroes.test(url);
}

export { validarFormulario };
