/** @format */

// import { validate } from "./validator";

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#btn_close_modal")
    .addEventListener("click", function (ev) {
      document.querySelector("#modal").classList.add("close");
    });

  document
    .querySelector("#btn_enviar")
    .addEventListener("click", function (ev) {
      if (validate()) {
        console.log("submit");
        document.querySelector("#modal").classList.remove("close");
        // document.querySelector("form").submit();
      }
    });
  var country = document.getElementById("country_select");
  var unit = document.getElementById("unity_select");
  var unitsByCountry = {
    Brazil: [
      "Açonorte",
      "Cearense",
      "Cosigua",
      "Divinópolis",
      "Unidade Riograndense",
      "Unidade Araçariguama",
      "Comercial Gerdau - Contagem",
      "Unidade Cosígua",
      "Unidade Divinópolis",
      "Unidade Araucária",
      "Unidade Sete Lagoas",
      "Unidade Ouro Branco",
      "Unidade Silat",
      "Mineração - Miguel Burnier",
      "Mineração - Várzea do Lopes",
      "Florestal",
      "Unidade Pindamonhangaba",
      "Unidade Charqueadas",
      "Unidade Mogi das Cruzes",
      "Comercial Gerdau - Aracaju",
      "Comercial Gerdau - Araçatuba",
      "Comercial Gerdau - Araraquara",
      "Comercial Gerdau - Barreiras",
      "Comercial Gerdau - Bauru",
      "Comercial Gerdau - Belém",
      "Comercial Gerdau - Belo Horizonte",
      "Comercial Gerdau - Blumenau",
      "Comercial Gerdau - Brasília",
      "Comercial Gerdau - Campina Grande",
      "Comercial Gerdau - Campo Grande",
      "Comercial Gerdau - Campinas",
      "Comercial Gerdau - Caruaru",
      "Comercial Gerdau - Cascavel",
      "Comercial Gerdau - Caxias do Sul",
      "Comercial Gerdau - Chapecó",
      "Comercial Gerdau - Criciúma",
      "Comercial Gerdau - Cuiabá",
      "Comercial Gerdau - Curitiba",
      "Comercial Gerdau - Divinópolis",
      "Comercial Gerdau - Dourados",
      "Comercial Gerdau - Feira de Santana",
      "Comercial Gerdau - Florianópolis",
      "Comercial Gerdau - Fortaleza",
      "Comercial Gerdau - Goiânia",
      "Comercial Gerdau - Governador Valadares",
      "Comercial Gerdau - Guarapuava",
      "Comercial Gerdau - Imperatriz",
      "Comercial Gerdau - João Pessoa",
      "Comercial Gerdau - Joinville",
      "Comercial Gerdau - Juazeiro",
      "Comercial Gerdau - Juazeiro do Norte",
      "Comercial Gerdau - Juiz de Fora",
      "Comercial Gerdau - Jundiaí",
      "Comercial Gerdau - Lages",
      "Comercial Gerdau - Limeira",
      "Comercial Gerdau - Londrina",
      "Comercial Gerdau - Maceió",
      "Comercial Gerdau - Manaus",
      "Comercial Gerdau - Marília",
      "Comercial Gerdau - Maringá",
      "Comercial Gerdau - Montes Claros",
      "Comercial Gerdau - Mossoró",
      "Comercial Gerdau - Natal",
      "Comercial Gerdau - Novo Hamburgo",
      "Comercial Gerdau - Palmas",
      "Comercial Gerdau - Panambi",
      "Comercial Gerdau - Passo Fundo",
      "Comercial Gerdau - Pato Branco",
      "Comercial Gerdau - Pelotas",
      "Comercial Gerdau - Ponta Grossa",
      "Comercial Gerdau - Porto Alegre",
      "Comercial Gerdau - Porto Velho",
      "Comercial Gerdau - Presidente Prudente",
      "Comercial Gerdau - Recife",
      "Comercial Gerdau - Ribeirão Preto",
      "Comercial Gerdau - Rio de Janeiro",
      "Comercial Gerdau - Rio do Sul",
      "Comercial Gerdau - Rio Verde",
      "Comercial Gerdau - Salvador Unidade 2  Cassange SS2",
      "Comercial Gerdau - Santa Maria",
      "Comercial Gerdau - São Caetano do Sul",
      "Comercial Gerdau - São Gonçalo",
      "Comercial Gerdau - São José do Rio Preto",
      "Comercial Gerdau - São José dos Campos",
      "Comercial Gerdau - São Luís",
      "Comercial Gerdau - Sinop",
      "Comercial Gerdau - Sorocaba",
      "Comercial Gerdau - Teresina",
      "Comercial Gerdau - Uberlândia",
      "Comercial Gerdau - Umuarama",
      "Comercial Gerdau - Varginha",
      "Comercial Gerdau - Vitória",
      "Comercial Gerdau - Vitória da Conquista",
      "Comercial Gerdau - Volta Redonda",
      "CS SÃO LEOPOLDO",
      "Unidade Cearense",
      "Escritório Sede São Paulo",
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
    Canada: ["Cambridge", "Manitoba - MRM", "Whitby", "Huntington Heat Treating"].sort(),
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
