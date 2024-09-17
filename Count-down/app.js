const endDate = '21 March 2024 10:00 PM'

document.querySelector('#end-date').innerText = endDate

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    console.log(end);
    console.log(now)
}

clock()