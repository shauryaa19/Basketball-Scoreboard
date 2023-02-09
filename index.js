let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let countHome=0
let countGuest=0

function add1h() {
    countHome+=1
    homeScore.textContent = countHome
}

function add2h() {
    countHome+=2
    homeScore.textContent = countHome
}

function add3h() {
    countHome+=3
    homeScore.textContent = countHome
}

function add1g() {
    countGuest+=1
    guestScore.textContent = countGuest
}

function add2g() {
    countGuest+=2
    guestScore.textContent = countGuest
}

function add3g() {
    countGuest+=3
    guestScore.textContent = countGuest
}

