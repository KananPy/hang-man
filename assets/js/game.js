class HangMan {
    constructor() {
        this.playBtn = document.querySelector(".button")
        this.tryAgain = document.querySelector(".button2")
        this.section1 = document.querySelector(".section1")
        this.section2 = document.querySelector(".section2")
        this.section3 = document.querySelector(".section3")
        this.score = document.querySelector("#myScore")
        this.finalScore = document.querySelector(".finalResult")
        this.input = document.querySelector('.letters')
        this.life = document.querySelector('.life')
        this.music1 = document.querySelector('#marioRunning')
        this.music2 = document.querySelector('#marioLost')



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
        this.tryAgain.addEventListener("click", this.Again.bind(this))







    }


    // Change page
    changePage() {
        const page1 = this.section1
        const page2 = this.section2

        page1.style.display = "none"
        page2.style.display = "block"

        this.getRandomValue()
        this.playMusic1()
        // this.input.value = inputUnderscore

    }

    Again(){
        window.location.reload()
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



        let result = lower.every((element) => {
            return element != letter
        })

        if(result){
            this.wrongLetter -= 1
            this.life.textContent = this.wrongLetter
            console.log('wrong', this.wrongLetter);
            if(this.wrongLetter ===0){
                this.endGame()
            }
        }


        for( let i = 0; i < lower.length; i++){



            if(letter === lower[i]){
                underscore[i] = lower[i]
                let capital =  typeof underscore[0] === 'string' ? underscore[0].toUpperCase() : '';
                underscore.splice(0, 1, capital)
                let completWord = underscore.every((element) => {
                    return element != "_"
                })
                if(completWord){
                    this.count += 1
                    this.score.textContent = this.count
                    this.finalScore.textContent = this.count
                    window.removeEventListener("keyup", this.keyBoard);
                    this.getRandomValue();
                    break
                }

        }


            // console.log('bas herf', underscore);
            // console.log('correct');
        }

        this.input.value = underscore.join('')



        console.log(randomWord);
        // this.getRandomValue()


    }

    endGame() {
        this.pauseMusic()
        this.playMusic2()
        this.section3.style.display = "block";
        this.section2.style.display = "none";
        this.finalScore.textContent = this.count;


    }

    playMusic1(){
        this.music1.play()
    }

    playMusic2(){
        this.music2.play()
    }

    pauseMusic(){
        this.music1.pause()
    }








}

let newHangman = new HangMan()

