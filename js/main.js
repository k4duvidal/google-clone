document.getElementById('entrada').addEventListener(
    "keydown", function(evento){
        if(evento.keyCode == 13){
            pesquisaGoogle()
        }
    }
)

function pesquisaGoogle(){
    url = "https://www.google.com/search?q="
    valordigitado = document.getElementById('entrada').value
    pesquisa = url + valordigitado;
    window.open(pesquisa, "_self")
}

function pesquisaWiki(){
    url = "https://pt.wikipedia.org/wiki/"
    valordigitado = document.getElementById('entrada').value
    pesquisa = url + valordigitado;
    window.open(pesquisa, "_self")
}

function fazerLogin(){
    window.open("https://accounts.google.com/ServiceLogin?hl=pt-BR&passive=true&continue=https://www.google.com/%3Fgws_rd%3Dssl%26pccc%3D1&ec=GAZAmgQ", "_self")

}


function botaolimpar(){
    document.getElementById('entrada').value = ""
}