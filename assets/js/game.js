class HangMan {
    constructor() {
        this.playBtn = document.querySelector(".button")
        this.section1 = document.querySelector(".section1")
        this.section2 = document.querySelector(".section2")
        this.score = document.querySelector("#myScore")
        this.input = document.querySelector('.letters')


        this.count = 0
        this.wrongLetter = 6
        this.cities = [
            'Aghdam',
            'Agdash',
            'Aghjabadi',
            'Agstafa',
            'Agsu',
            'Astara',
            'Aghdara',
            'Babek',
            'Baku',
            'Balakən',
            'Barda',
            'Beylagan',
            'Bilasuvar',
            'Dashkasan',
            'Shabran',
            'Fuzuli',
            'Gadabay',
            'Ganja',
            'Goranboy',
            'Goychay',
            'Goygol',
            'Hajigabul',
            'Imishli',
            'Ismayilli',
            'Jabrayil',
            'Julfa',
            'Kalbajar',
            'Khachmaz',
            'Khankendi',
            'Khojavend',
            'Khirdalan',
            'Kurdamir',
            'Lankaran',
            'Lerik',
            'Masally',
            'Mingachevir',
            'Nakhchivan',
            'Naftalan',
            'Neftchala',
            'Oghuz',
            'Ordubad',
            'Qabala',
            'Qakh',
            'Qazakh',
            'Quba',
            'Qubadli',
            'Qusar',
            'Saatli',
            'Sabirabad',
            'Shahbuz',
            'Shaki',
            'Shamakhi',
            'Shamkir',
            'Sharur',
            'Shirvan',
            'Siyazan',
            'Shusha',
            'Sumgait',
            'Tartar',
            'Tovuz',
            'Ujar',
            'Yardimli',
            'Yevlakh',
            'Zaqatala',
            'Zardab',
            'Zangilan'
        ]

        this.playBtn.addEventListener("click", this.changePage.bind(this))




    }

    move() {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            var letter = e.key
            console.log(letter);
        }
    }


    // Change page
    changePage() {
        const page1 = this.section1
        const page2 = this.section2

        page1.style.display = "none"
        page2.style.display = "block"

        this.getRandomValue()
        // this.input.value = inputUnderscore

    }

    // Input area
    getRandomValue() {
        let randomWord = this.cities[Math.floor(Math.random() * this.cities.length)]
        let underscore = []

        for (let i = 0; i < randomWord.length; i++) {
            underscore.push('_')
        }

        let inputUnderscore = underscore.join(' ')

        this.input.value = inputUnderscore

        console.log(inputUnderscore);

        this.keyBoard = (e) => {
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122) {
                this.findingLetter(e, randomWord, underscore);
                // console.log(e);
            }

        };

        window.addEventListener("keyup", this.keyBoard);


        return inputUnderscore

    }

    // finding letters

    findingLetter(e, randomWord, underscore){
        let letter = e.key
        // console.log(letter);
        let lowerRandom = typeof randomWord === 'string' ? randomWord.toLowerCase() : '';
        // console.log(lowerRandom);
        let lower = lowerRandom.split('')

        for( let i = 0; i < lower.length; i++){

            if(letter === lower[i]){
                underscore[i] = lower[i]
                let capital =  typeof underscore[0] === 'string' ? underscore[0].toUpperCase() : '';
                underscore.splice(0, 1, capital)
                // let HangManIndex = this.wrongLetter - this.count
                // console.log('count', HangManIndex);
                console.log(i);
        }


            // console.log('bas herf', underscore);
            // console.log('correct');
        }

        this.input.value = underscore.join('')



        console.log(randomWord);
        // this.getRandomValue()


    }








}

let newHangman = new HangMan()

