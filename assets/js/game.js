class HangMan {
    constructor() {
        this.playBtn = document.querySelector(".button")
        this.section1 = document.querySelector(".section1")
        this.section2 = document.querySelector(".section2")
        this.score = document.querySelector("#myScore")

        this.playBtn.addEventListener("click", this.changePage.bind(this))

    }

    changePage() {
        const page1 = this.section1
        const page2 = this.section2

        page1.style.display = "none"
        page2.style.display = "block"

    }




}

let newHangman = new HangMan()

