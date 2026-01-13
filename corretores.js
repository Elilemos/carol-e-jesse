const empreendimentos = [
    {
        link: "pdf/2.pdf",
        imagem: "../carol-e-jesse/pdf/guagiru.png"
    },
    {
        nome: "Parque do cocó",
        link: "pdf/BOOK_MOOD_PARQUE DO COCÓ (4).pdf",
        imagem: "../carol-e-jesse/pdf/parque-do-coco.png"
    },
    {
        nome: "Cumbuco Diamond 6",
        link: "pdf/Cumbuco Diamond 6.pdf",
        imagem: "../carol-e-jesse/pdf/cumbuco.png"
    },
    {
        nome: "Bairro de Fátima",
        link: "pdf/BOOK LUMINA RIVA DIGITAL.pdf",
        imagem: "../carol-e-jesse/pdf/bairro-de-fatima.png"
    },
    {
        nome: "Maraponga",
        link: "pdf/BOOK CONQUISTA MARAPONGA.pdf",
        imagem: "../carol-e-jesse/pdf/maraponga.png"
    }
];

const empreendimentosContainer = document.querySelector('.empreendimentos-container');

empreendimentos.forEach(empreendimento => {
const cardLink = document.createElement('a');
cardLink.href = empreendimento.link;
cardLink.classList.add('empreendimento-card-link');
cardLink.setAttribute('target', '_blank');

const cardDiv = document.createElement('div');
cardDiv.classList.add('empreendimento-card');

cardDiv.style.backgroundImage = `url('${empreendimento.imagem}')`;

cardLink.appendChild(cardDiv);
empreendimentosContainer.appendChild(cardLink);
});