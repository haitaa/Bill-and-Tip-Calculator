const calcTip = function () {
    for (i = 0; i <= bills.length - 1; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            const tip = bills[i] * 0.20
            const total = tip + bills[i]
            console.log(`Your total is: ${total}. Tip percentage: ${tip}`)
            tips.push(tip)
            totals.push(total)
        } else {
            const tip = bills[i] * 0.15
            const total = tip + bills[i]
            console.log(`Your total is: ${total}. Tip percentage: ${tip}`)
            tips.push(tip)
            totals.push(total)
        }
    }
}

const calcAvg = function () {
    for (let i = 0; i <= totals.length; i++) {
        arr.push(totals[i])
    }
    let sum;
    for (let i = 0; i <= arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}


const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const tips = new Array()
const totals = new Array()
const arr = new Array()

calcTip()
console.log(calcAvg())
