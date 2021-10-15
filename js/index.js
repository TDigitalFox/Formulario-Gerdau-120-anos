/** @format */

// import { validate } from "./validator";

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#btn_close_modal")
    .addEventListener("click", function (ev) {
      document.querySelector("#modal").classList.add("close");
      document.querySelector("#modalie").classList.add("close");
    });
  document
    .querySelector("#btn_close_modalie")
    .addEventListener("click", function (ev) {
      document.querySelector("#modalie").classList.add("close");
    });

  document
    .querySelector("#btn_enviar")
    .addEventListener("click", function (ev) {
      if (!ieFormValidation()) {
        document.querySelector("#modalie").classList.remove("close");
      } else {
        if (validate()) {
          console.log("submit");
          document.querySelector("#modal").classList.remove("close");
          // document.querySelector("form").submit();
        }
      }
    });
  var country = document.getElementById("country_select");
  var unit = document.getElementById("unity_select");
  var unitsByCountry = {
    Brazil: [
      "Açonorte",
      "Araçariguama",
      "Araucária",
      "Caucaia",
      "Cearense",
      "CG Aracaju",
      "CG Araçatuba",
      "CG Araraquara",
      "CG Barreiras",
      "CG Bauru",
      "CG Belém",
      "CG Belo Horizonte",
      "CG Blumenau",
      "CG Brasília",
      "CG Campina Grande",
      "CG Campinas",
      "CG Campo Grande",
      "CG Caruaru",
      "CG Cascavel",
      "CG Caxias do Sul",
      "CG Chapecó",
      "CG Contagem",
      "CG Criciúma",
      "CG Cuiabá",
      "CG Curitiba",
      "CG Divinópolis",
      "CG Dourados",
      "CG Feira de Santana",
      "CG Florianópolis",
      "CG Fortaleza",
      "CG Goiânia",
      "CG Governador Valadares",
      "CG Guarapuava",
      "CG Imperatriz",
      "CG Jaboatão dos Guararapes",
      "CG João Pessoa",
      "CG Joinville",
      "CG Juazeiro",
      "CG Juazeiro do Norte",
      "CG Juiz de Fora",
      "CG Jundiaí",
      "CG Lages",
      "CG Limeira",
      "CG Londrina",
      "CG Maceió",
      "CG Manaus",
      "CG Marília",
      "CG Maringá",
      "CG Montes Claros",
      "CG Mossoró",
      "CG Natal",
      "CG Novo Hamburgo",
      "CG Palmas",
      "CG Panambi",
      "CG Passo Fundo",
      "CG Pato Branco",
      "CG Pelotas",
      "CG Ponta Grossa",
      "CG Porto Alegre",
      "CG Porto Velho",
      "CG Presidente Prudente",
      "CG Recife",
      "CG Ribeirão Preto",
      "CG Rio de Janeiro",
      "CG Rio do Sul",
      "CG Rio Verde",
      "CG Salvador Unidade 2",
      "CG Santa Maria",
      "CG São Caetano do Sul",
      "CG São Gonçalo",
      "CG São José do Rio Preto",
      "CG São José dos Campos",
      "CG São Leopoldo",
      "CG São Luís",
      "CG Sinop",
      "CG Sorocaba",
      "CG Teresina",
      "CG Uberlândia",
      "CG Umuarama",
      "CG Varginha",
      "CG Vitória",
      "CG Vitória da Conquista",
      "CG Volta Redonda",
      "Charqueadas",
      "Corte e Dobra Aracaju",
      "Corte e Dobra Araucária",
      "Corte e Dobra Campo Grande",
      "Corte e Dobra Chapecó",
      "Corte e Dobra Contagem",
      "Corte e Dobra Cuiabá",
      "Corte e Dobra Goiania",
      "Corte e Dobra Maceió",
      "Corte e Dobra Maracanaú",
      "Corte e Dobra Maringá",
      "Corte e Dobra Porto Alegre",
      "Corte e Dobra Ribeirão Preto",
      "Corte e Dobra Rio de Janeiro",
      "Corte e Dobra São Paulo",
      "Corte e Dobra Simões Filho",
      "Corte e Dobra Suape",
      "Corte e Dobra Teresina",
      "Corte e Dobra Tijucas",
      "Corte e Dobra Vitória",
      "Cosígua",
      "Divinópolis",
      "Escritório Sede São Paulo",
      "Metálicos Araquari",
      "Metálicos Araraquara",
      "Metálicos Bauru",
      "Metálicos Contagem",
      "Metálicos Joinville",
      "Metálicos Jundiai",
      "Metálicos Jundiaí",
      "Metálicos Manaus",
      "Metálicos Ribeirão preto",
      "Metálicos São Caetano",
      "Metálicos Simões filho",
      "Metálicos Teresina",
      "Mineração - Miguel Burnier",
      "Mineração - Várzea do Lopes",
      "Mogi das Cruzes",
      "Ouro Branco",
      "Pindamonhangaba",
      "Porto Usiba",
      "Porto Vitória",
      "Riograndense",
      "Sete Lagoas",
      "Três Marias",
    ].sort(),
    Mexico: [
      "Planta Cd. Sahagún",
      "Planta Tultitlán",
      "Planta La Presa",
      "Distribuição",
      "Centro de distribución - Ciudad de México",
      "Centro de distribución - Monterrey",
      "Centros de acopio - Cd. Sahagún",
      "Centros de acopio - La Presa",
      "Centros de acopio - Los Reyes",
      "Centros de acopio - Guadalajara",
      "Centros de acopio - San Juan",
      "Centros de acopio - Tultitlán",
      "Centros de acopio - Veracruz",
      "CDMX Office",
      "Scrap Yard",
    ].sort(),
    Canada: [
      "Cambridge",
      "Manitoba - MRM",
      "Whitby",
      "Huntington Heat Treating",
    ].sort(),
    USA: [
      "Cartersville",
      "Charlotte",
      "Jackson Office",
      "St. Paul",
      "Wilton",
      "Midlothian",
      "Petersburg",
      "Fort Smith Mill",
      "Jackson Mill",
      "Monroe Mill",
      "Gerdau Next",
      "Metals Recycling",
      "Tampa Office",
      "Huntington Heat Treating",
    ].sort(),
    Uruguay: ["Montevideo"].sort(),
    Argentina: [
      "Acería",
      "Planta Pérez",
      "Oficina Perez",
      "Comercial Gerdau Rosario",
      "Comercial Gerdau Campana",
      "Comercial Gerdau Córdoba",
      "Comercial Gerdau La Rioja",
      "Comercial Gerdau Posadas",
    ].sort(),
    Peru: ["Oficina Lima", "Planta industrial - Chimbote"].sort(),
    Venezuela: ["Oficina Caracas", "Planta Ciudad Ojeda"].sort(),
    Colombia: [
      "Bogotá e Cundinamarca",
      "Antioquia",
      "Atlántico",
      "Bolivar",
      "Boyacá",
      "Caldas",
      "Casanare",
      "Cesar",
      "Chocó",
      "Córdoba",
      "Huila",
      "La Guajira",
      "Magdalena",
      "Meta",
      "Quindío",
      "Risaralda",
      "Santander",
      "Sucre",
      "Tolima",
      "Valle",
      "Nariño",
    ].sort(),
    DominicanRepublic: [
      "Fábrica La Isabela",
      "Fábrica Duarte",
      "Fábrica Santo Domingo",
    ].sort(),
  };

  country.addEventListener("change", function () {
    var selectedOption = unitsByCountry[this.value];
    while (unit.options.length > 0) {
      unit.options.remove(0);
    }
    /* Array.from(selectedOption).forEach(function (el) {
      let option = new Option(el, el);
      unit.appendChild(option);
    }); */

    for (var i = 0; i < selectedOption.length; i++) {
      let option = new Option(selectedOption[i], selectedOption[i]);
      unit.options.add(option);
    }
  });
});
