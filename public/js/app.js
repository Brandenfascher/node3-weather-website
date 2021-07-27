
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const iconOne = document.querySelector('#icon-1')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = null
    iconOne.style.display = "none"

    const location = search.value

    fetch("/weather?address=" + location
    ).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.forecastText
                iconOne.setAttribute("src", data.forecast.forecastIcon)
                iconOne.style.display = "block"
            }
        })
    })
})