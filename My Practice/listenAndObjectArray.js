let data = [
    {
        player :"Mervitz",
        score : 20
    },
    {
        player: "Achie",
        score: 32
    }
]
//fetching th button from the Dom , Storing it ina variable
const scoreBTn = document.getElementById("score-btn")
//Use addEventListener() to listen for buton cicked
scoreBTn.addEventListener("click",function(){
    //to get the first object
    console.log(data[0].score)

})