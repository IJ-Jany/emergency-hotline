
//heart functionality
function getElement (id){
const element = document.getElementById(id)
return element
}

const hearts = document.getElementsByClassName('heart')

for (const heart of hearts){
heart.addEventListener('click', function(){
const availableHeart = getElement('heartContainer')
let totalHeart = parseInt(availableHeart.innerText)
totalHeart++;
availableHeart.innerText = totalHeart;
})
}



const copies = document.getElementsByClassName('copy-btn')

for (const copy of copies){
copy.addEventListener('click', function(){
const availableCopy = document.getElementById('total-copy')
let totalCopy = parseInt(availableCopy.innerText)

totalCopy++;
availableCopy.innerText = totalCopy;
alert(`copy done`)



})
}


//call functionality

const buttons = document.getElementsByClassName('call-btn')

for(let button of buttons){
button.addEventListener('click',function(){
let card = button.parentElement.parentElement
const serviceName = card.querySelector('.service').innerText
const serviceNumber = card.querySelector('.service-number').innerText
const coins = getElement('coins')
let totalCoins = coins.innerText;
totalCoins = totalCoins - 20;
coins.innerText = totalCoins;

if(totalCoins<20){
alert(`You don't have enough coins to terminate the process`)
}else{
let card = button.parentElement.parentElement

alert(`${serviceName} ${serviceNumber}`)
coins.innerText = totalCoins;
}

//history
const history = document.getElementById('history-card-container')
const newHistory = document.createElement("div")

const now = new Date()
const time = now.toLocaleTimeString()

newHistory.className= "history-card bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-4"
newHistory.innerHTML=`

<div >
<h3 class="font-bold">${serviceName}</h3>
<h5>${serviceNumber}</h5>
</div>
<div>
<h5>${time}</h5>
</div>`

history.appendChild(newHistory)

})
}

//clear functionality
const clearButton = document.getElementById('clear-btn')

clearButton.addEventListener('click', function(){
const historyCard = document.getElementById('history-card-container')
historyCard.innerHTML = ""
})

function copyText(button){
    const card = button.parentElement.parentElement
    const text =  card.querySelector('.service-number').innerText
    navigator.clipboard.writeText(text)
}