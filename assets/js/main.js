//L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata

//in cui ogni cella contiene un numero tra quelli compresi in un range:

/*
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

// seleziono un elemento della DOM container

const containerOne = document.querySelector('.container_difficolta1');

// al click su bottone difficoltà 1 genero una griglia da 1 a 100 con ciclo for

const bottone1 = document.getElementById('bottone1');

let bombe = []

const numeriCasuali = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

bottone1.addEventListener('click', function () {

    bombe = []

    for (let index = 1; index <= 16; index++) {
        const numeriCasuali = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        bombe.push(numeriCasuali)



    }
    console.log(bombe)

    for (let i = 1; i <= 100; i++) {
        // crreo l'elemento dom da mettere nella griglia
        const divElementOne = document.createElement('div');

        // creo un <p></p>
        const par1 = document.createElement('p')
        // appendo l'elemento creatp al container
        par1.append(i)
        divElementOne.append(par1)

        //creo una classe da aggiungere al contenitore appena creato
        divElementOne.className = 'grid_cell_one'

        // appendo l'elemento creato al container
        containerOne.append(divElementOne)


        //attacco un eventListner a ciascun elemento creato nel ciclo
        divElementOne.addEventListener('click', function () {
            // modifico il colore di questo elemento con style
            this.style.backgroundColor = 'blue'

            cellNumber = this.innerHTML


            if (bombe.includes(numeriCasuali)) {
                this.style.backgroundColor = 'red'
            } else {
                console.log('continua');
            }
        })



    }





})

// posso passare alla creazione della griglia n° 2

//selezione l'elemento dallas DOM 
const containerTwo = document.querySelector('.container_difficolta2');

// al click su bottone difficoltà 2 genero una griglia da 1 a 81 con ciclo for

const bottone2 = document.getElementById('bottone2');


bottone2.addEventListener('click', function () {
    for (let i = 1; i <= 81; i++) {
        // creo l'elemento DOM da mettere nella griglia
        const divElementTwo = document.createElement('div');

        // creo un paragrafo
        const par2 = document.createElement('p')

        // appendo l'elemento creatp al container
        par2.append(i)

        divElementTwo.append(par2)

        //creo una classe da aggiungere al contenitore appena creato
        divElementTwo.className = 'grid_cell_two'

        // appendo l'elemento creato al container
        containerTwo.append(divElementTwo)



        //attacco un eventListner a ciascun elemento creato nel ciclo
        divElementTwo.addEventListener('click', function () {
            // modifico il colore delle celle
            this.style.backgroundColor = 'blue'
        })


    }
})

// posso passare alla creazione della griglia n° 3

const containerThree = document.querySelector('.container_difficolta3');

const bottone3 = document.getElementById('bottone3');

bottone3.addEventListener('click', function () {
    for (let i = 1; i <= 49; i++) {

        const divElementThree = document.createElement('div');

        const par3 = document.createElement('p')

        par3.append(i)

        divElementThree.append(par3)

        divElementThree.className = 'grid_cell_three'

        containerThree.append(divElementThree)

        divElementThree.addEventListener('click', function () {
            this.style.backgroundColor = 'blue'
        })

    }
})