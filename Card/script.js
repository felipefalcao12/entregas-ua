function Produto(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, porcentagemDesconto)
{
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.porcentagemDesconto = porcentagemDesconto;

    this.imprimeTags = function(){
        return this.tags.map((t)=>{
            return `
            <span>${t}</span>
            `
           }).join("")
    };   

    this.imprimeCaracteristicas = function(){
        return this.caracteristicas.map((c)=>{
            return `
            <span>${c}</span>
            `
           }).join("")
    };

    this.getDesconto = function(){
        return this.preco * (this.porcentagemDesconto==0?1:this.porcentagemDesconto/100)
    }

    this.getPrecoFinal = function(){
        return  this.preco - this.getDesconto()
    };

    this.imprimePrecoComDesconto = function(){
       return this.getPrecoFinal();
    };
}


let dadosMouse = new Produto("Mouse Storm Elite", 225.0, "Mouse Gamer Redragon Storm Elite Ultra Leve, Ergonômico e com Sensor Pixart 3389", "https://down-br.img.susercontent.com/file/br-11134207-7r98s-lmaislt969fb3d", true, 4.80, ["DPI mínimo: 100", "DPI máximo: 16000","Peso: 85 gr"], ["gamer", "mouse", "eletronicos"], 15);

let dadosNotebook = new Produto("Notebook Acer Nitro 5", 5299.00, "Notebook Acer Nitro 5 AN515-58-54UH Ci5 12ª Gen Windows 11 Home 8GB 512GB RTX 3050 15.6” Full HD ", "https://m.media-amazon.com/images/I/71R+dGPqtrL._AC_UF1000,1000_QL80_DpWeblab_.jpg", true, 4.80, ["Tela de 15.6 polegadas","Full HD","RTX 3050"],["tecnologia","notebook","gamer"], 12)

let dadosMonitor = new Produto("Monitor Gamer Odyssey G30", 909.00 , "Monitor Gamer Odyssey G30, 24 Polegadas, 144hz, Tempo de resposta de 1ms, Ajuste de Altura, Cor: Preta","https://m.media-amazon.com/images/I/61rd8zerEqL._AC_UF894,1000_QL80_.jpg", true, 4.90, ["Painel VA","Resolução FHD","Conexões: HDMI e Display Port", "24 Polegadas"],["tecnologia","monitor","gamer","samsung"], 17)

let dadosHeadset = new Produto("Headset Redragon Zeus",229.00, "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB","https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_original.jpg", true, 4.78,[ "Diâmetro do driver: 53mm","Material das Earpads: Tecido de malha esportiva","Frequencia de resposta: 50Hz até 20000Hz"], ["tecnologia", "headset", "gamer","eletronicos", "redragon"], 15)

let dadosTeclado = new Produto("Teclado Mecânico Husky", 259.00, "Teclado Mecânico Gamer Husky Gaming Blizzard, 60%, RGB, Switch Gateron Red, ABNT2, Branco - HGMO001", "https://images.kabum.com.br/produtos/fotos/114587/teclado-mecanico-gamer-husky-blizzard-rgb-switch-gateron-red-abnt2-branco-tc-hbl-br_1619467058_gg.jpg", true, 4.82, ["Switch Gateron Red", "FHD 1080p", "60%", "RGB", "Branco"], ["tecnologia", "teclado mecânico", "teclado 60%"], 10)
    
let listaDeProdutos = [dadosMouse, dadosNotebook, dadosMonitor, dadosHeadset, dadosTeclado];

function gerarCardProdutos(produtoObjeto){
    return `
    <div class="card">
            <div class="card-titulo">
              <h2 class="titulo">${produtoObjeto.nome}</h2>
              <p class="descricao">
                ${produtoObjeto.descricao}
              </p>
              <p class="disponivel">${produtoObjeto.disponivel ? "DISPONÍVEL" : "INDISPONÍVEL"}</p>
            </div>
            <div class="card-imagem">
              <img
                src="${produtoObjeto.imagem}"
              />
            </div>
            <div class="card-tags">
              <div class="tags">
                <span> Tags: </span>
                ${produtoObjeto.imprimeTags()}
              </div>
              <p class="avaliacao">
              Avaliacao: ${produtoObjeto.avaliacao}
            </p>
              <div class="caracteristicas">
                <span> Caracteristicas do Produto: </span>
                ${produtoObjeto.imprimeCaracteristicas()}
              </div>
              <div class="preço">
                <p> De: R$ ${produtoObjeto.preco}</p>
              </div>
              <div class="desconto">
                <p> Desconto de: ${produtoObjeto.porcentagemDesconto}%</p>
              </div>
              <div class="totaldesconto">
                <p> Por: R$ ${produtoObjeto.imprimePrecoComDesconto()}</p>
              </div>
            </div>
          </div>
    `
}

const app = document.getElementById("app");

app.innerHTML = listaDeProdutos.map((produto)=>{
    return gerarCardProdutos(produto);
}).join("")