
function pesquisaGoogle(){
    url = "https://www.google.com/search?q="
    valordigitado = document.getElementById('entrada').value
    pesquisa = url + valordigitado;
    window.open(pesquisa, "_self")
}