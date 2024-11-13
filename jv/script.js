const players = [
    {
        name: 'Cristiano Ronaldo',
        team: 'Real madrid',
        coutry: 'Portugal',
        gols: 801,


    },

    {
        name: 'Lionel Messi',
        team: 'Barcelona',
        coutry: 'argentina',
        gols: 700,
    },

    {
        name: 'NeymarJr',
        team: 'PSG',
        coutry: 'Brasil',
        gols: 290,
    },

    {
        name: 'Jude Bellingham',
        team: 'Real madrid',
        coutry: 'Inglaterra',
        gols: 20,

    },

    {
        name: 'vinicius junior',
        team: 'Real madrid',
        coutry: 'Brasil',
        gols: 81,
    },

    {
        name: 'erling haaland',
        team: 'manchester city',
        coutry: 'Noruega',
        gols: 27,
    },

    {
        name:'ronaldinho',
        team:'Barcelona',
        coutry:'Brasil',
        gols:299,

    },




];



document.querySelector('form').addEventListener('submit', function (event) {


    event.preventDefault();

    const select = document.getElementById('player-select');
    const playerName = select.value;
    const player = players.find(player => player.name === playerName);

    const playerinfo = document.getElementById('player-info');
    playerinfo.innerHTML = `
        <h2>${player.name}</h2>
        <p><strong>Time:</strong> ${player.team}</p>
        <p><strong>País:</strong> ${player.coutry}</p>
        <p><strong>gols:</strong> ${player.gols}</p>
    `;

});

function calc(valor,marcado) {
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if(marcado) {
        total = Number(total) + Number(valor);
    } else {
        total = Number(total) - Number(valor);  
    }

    //saida
    document.getElementById('total').value = total;
}