/** @format */

var language = "pt";

let translation_map = {
    pt: {
        placeholder: {
            name_input: "Nome e sobrenome",
            email_input: "Email corporativo",
            function_input: "Função",
            personal_number_input: "Número Pessoal",
            message_input: "Digite Aqui (máximo de 120 caracteres)",
        },
        select: {
            country_select: [
                "País",
                "Estados Unidos",
                "Canadá",
                "Argentina",
                "Brasil",
                "Colômbia",
                "México",
                "Peru",
                "República Dominicana",
                "Uruguai",
                "Venezuela",
            ],
            unity_select: ["Unidade"],
        },
        text: {
            first_p:
                "Neste ano em que celebramos nossa história de crescimento, queremos entender como pensa quem é parte essencial desta história: você.",
            second_p:
                "Preencha o formulário ao lado e participe de mais uma ação de celebração e colaboração em equipe da Gerdau.",
            third_p: "O futuro se molda.",
            spacer_text:
                "Como você enxerga a Gerdau para os próximos 120 anos?",
            thank_you_header: "Obrigado por enviar seu feedback",
            thank_you_text: "Nós te agradecemos!",
            btn_close_modal: "Fechar",
            btn_enviar: "Enviar",
        },
    },
    es: {
        placeholder: {
            name_input: "Nombre y apellido",
            email_input: "Email corporativo",
            function_input: "Posición",
            personal_number_input: "Número Personal",
            message_input: "Escriba Aqui (120 caracteres como máximo)",
        },
        select: {
            country_select: [
                "País",
                "Estados Unidos",
                "Canadá",
                "Argentina",
                "Brasil",
                "Colombia",
                "México",
                "Perú",
                "República Dominicana",
                "Uruguay",
                "Venezuela",
            ],
            unity_select: ["Sitio"],
        },
        text: {
            first_p:
                "En este año en que el que celebramos nuestra historia de crecimiento, queremos comprender cómo piensan los que son parte esencial de esta historia: tú.",
            second_p:
                "Rellena el formulario al lado y participa en otro acto de celebración y colaboración como equipo Gerdau.",
            third_p: "El futuro se moldea.",
            spacer_text: "¿Como ves Gerdau en los próximos 120 años?",

            thank_you_header: "Gracias por enviar sus comentarios.",
            thank_you_text: "Te agradecemos",
            btn_close_modal: "Fechar",
            btn_enviar: "Send",
        },
    },
    en: {
        placeholder: {
            name_input: "Name and surname",
            email_input: "Corporate email",
            function_input: "Position",
            personal_number_input: "Personal Number",
            message_input: "Type Here (120 characters maximum)",
        },
        select: {
            country_select: [
                "Country",
                "United States",
                "Canada",
                "Argentina",
                "Brazil",
                "Colombia",
                "Mexico",
                "Peru",
                "Dominican Republic",
                "Uruguay",
                "Venezuela",
            ],
            unity_select: ["Business Unity"],
        },
        text: {
            first_p:
                "In the year we celebrate our history of growth, we want to understand what the essential part of this history thinks: you.",
            second_p:
                "Fill in the form alongside and be part of another Gerdau team celebration and collaboration act.",
            third_p: "Shape the future.",
            spacer_text: "How do you see Gerdau over the next 120 years?",
            thank_you_header: "Thank you for submitting your feedback.",
            thank_you_text: "We thank you",
            btn_close_modal: "Close",
            btn_enviar: "Enviar",
        },
    },
};

/** */
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".language-selector").click();
    document.querySelectorAll(".language-selector").forEach((item) => {
        item.addEventListener("click", (ev) => {
            clearSelect();
            if (!ev.target.classList.contains("active")) {
                if (document.querySelector(".language-selector.active")) {
                    document
                        .querySelector(".language-selector.active")
                        .classList.remove("active");
                }

                ev.target.classList.add("active");
                language = ev.target.id;
                translate(ev.target.id);
            }
        });
    });
});

/** */
function translate(language) {
    Object.keys(translation_map[language]).forEach((type) => {
        Object.keys(translation_map[language][type]).forEach((id) => {
            switch (type) {
                case "placeholder":
                    document.querySelector(`#${id}`).placeholder =
                        translation_map[language][type][id] + ":";
                    break;
                case "select":
                    document
                        .querySelectorAll(`#${id} option`)
                        .forEach((option, index) => {
                            option.innerText =
                                translation_map[language][type][id][index];
                        });

                    break;
                case "text":
                    document.querySelector(`#${id}`).innerText =
                        translation_map[language][type][id];
                    break;
            }
        });
    });
}

function clearSelect() {
    /* document.querySelector("form").reset(); */
    document.querySelector(`#country_select`).value = "Country";
    while (document.getElementById("unity_select").options.length > 1) {
        document.getElementById("unity_select").options.remove(0);
    }
    document
        .querySelector(`#unity_select option`)
        .setAttribute("disabled", "disabled");
    document
        .querySelector(`#unity_select option`)
        .setAttribute("selected", "selected");
    document.querySelector(`#unity_select option`).value = "";
}
