const empreendimentos = [
    {
        link: "pdf/2.pdf",
        imagem: "../Carol-e-Jessé/pdf/guagiru.png"
    },
    {
        nome: "Parque do cocó",
        link: "pdf/BOOK_MOOD_PARQUE DO COCÓ (4).pdf",
        imagem: "../Carol-e-Jessé/pdf/parque-do-cocó.png"
    },
    {
        nome: "Cumbuco Diamond 6",
        link: "pdf/Cumbuco Diamond 6.pdf",
        imagem: "../Carol-e-Jessé/pdf/cumbuco.png"
    },
    {
        nome: "Bairro de Fátima",
        link: "pdf/BOOK LUMINA RIVA DIGITAL.pdf",
        imagem: "../Carol-e-Jessé/pdf/bairro-de-fátima.png"
    },
    {
        nome: "Maraponga",
        link: "pdf/BOOK CONQUISTA MARAPONGA.pdf",
        imagem: "../Carol-e-Jessé/pdf/maraponga.png"
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