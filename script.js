document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container')
    const sum = document.getElementById('sum')
    const clearAll = document.getElementById('clear')
    const randomButton = document.getElementById('randomLetter')

    for (let i = 0; i < 6*6; i++) {
        const innerContainer = document.createElement('div')
        innerContainer.classList.add('innerContainer')

        const input = document.createElement('textarea')
        input.rows = '1'
        input.classList.add('input')

        const poeng = document.createElement('input')
        poeng.type = 'text'
        poeng.classList.add('poeng')
        poeng.name = 'poeng'

        innerContainer.appendChild(input)
        innerContainer.appendChild(poeng)
        container.appendChild(innerContainer)

        if (i % 6 === 0) {
            poeng.remove()
            input.style.width = '50px'
            input.style.textAlign = 'center'
            input.classList.add('bokstaver')
        }

        if (i < 6) {
            poeng.remove()
            input.style.fontWeight = 'bold'
        }

        if (i === 0) {
            input.remove()
        }
    }

    function totalSum() {
        let currentTotal = 0
        const poengInputs = document.querySelectorAll('.poeng')
        poengInputs.forEach(poengInput => {
            const value = parseFloat(poengInput.value)
            if (!isNaN(value)) {
                currentTotal += value
            }
        });
        if (sum) {
            sum.textContent = `Sum: ${currentTotal}`
        }
    }

    totalSum()

    container.addEventListener('input', (event) => {
        if (event.target.classList.contains('poeng')) {
            totalSum()
        }
    })

    const poengFields = document.querySelectorAll('.poeng')
    const inputFields = document.querySelectorAll('.input')
    clearAll.addEventListener('click', () => {
        const userConfirm = confirm('Are you sure you want to clear all fields?')
        if (userConfirm) {
            inputFields.forEach(item => {
                item.value = ''
            });
            poengFields.forEach(points => {
                points.value = ''
            })
            totalSum()
        }
    })


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

      randomButton.addEventListener('click', () => {
        const bokstavRute = document.querySelectorAll('.bokstaver')
        const fullAlphabet = "ABDEFGHIJKLMNOPRSTUVYØÅ".split('');
        const shuffledAlphabet = shuffleArray([...fullAlphabet]);

        bokstavRute.forEach((item, index) => {
            item.value = shuffledAlphabet[index]
        })
    })

    const bgc = document.getElementById('bgc')
    const body = document.querySelector('body')
    const h1 = document.getElementById('h1')
    const txtField = document.querySelectorAll('.input')

    bgc.addEventListener('change', (event) => {
        txtField.forEach(item => {
            item.style.backgroundColor = ''
        })
        body.style.backgroundImage = ''
        h1.style.color = ''
        sum.style.color = ''
        body.style.backgroundRepeat = ''
        body.style.backgroundSize = ''
        body.style.backgroundPositionX = ''

        if (event.target.value == 0) {
            // 
        } else if (event.target.value == 1) {
            body.style.backgroundImage = `url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            h1.style.color = 'black'
            sum.style.color = 'white'
            body.style.backgroundRepeat = 'no-repeat'
            body.style.backgroundSize = 'auto'

        } else if (event.target.value == 2) {
            body.style.backgroundImage = 'url("https://media1.tenor.com/m/kq7GyBPPIj0AAAAd/sweaty-speedrunner.gif")'
            h1.style.color = 'bisque'
            sum.style.color = 'black'
            body.style.backgroundRepeat = 'no-repeat'
            body.style.backgroundSize = 'cover'
            body.style.backgroundPositionX = 'center'
            txtField.forEach(item => {
                item.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            })

        } else if (event.target.value == 3) {
            body.style.backgroundImage = 'url("https://media1.tenor.com/m/fCqfvusQwzQAAAAC/sunrise.gif")'
            h1.style.color = 'white'
            sum.style.color = 'white'
            body.style.backgroundRepeat = 'repeat'
            body.style.backgroundSize = 'cover'


        } else if (event.target.value == 4) {
            body.style.backgroundImage = 'url("https://www.designyourway.net/blog/wp-content/uploads/2018/11/pastel-background-goo.jpg")'
            h1.style.color = 'darkviolet'
            sum.style.color = 'darkviolet'
            body.style.backgroundRepeat = 'no-repeat'
            body.style.backgroundSize = 'auto'
            body.style.backgroundPositionX = ''


        } else if (event.target.value == 5) {
            body.style.backgroundImage = `url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN4bmtibnZkeDAybW9wa3J4ZW92eDN0NGx0dmMzYWdoN2J1OW80YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dkUtjuBEdICST5zG7p/giphy.gif")`
            h1.style.color = 'black'
            sum.style.color = 'black'
            body.style.backgroundRepeat = 'no-repeat'
            body.style.backgroundSize = 'cover'
            body.style.backgroundPositionX = 'center'
            txtField.forEach(item => {
                item.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            })

        } else if (event.target.value == 6) {
            body.style.backgroundImage = `url("https://images.unsplash.com/photo-1498590880827-3f79fdcd7fbe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            h1.style.color = 'white'
            sum.style.color = 'white'
            body.style.backgroundSize = 'cover'
            body.style.backgroundRepeat = 'no-repeat'


        } else if (event.target.value == 7) {
            body.style.backgroundImage = ''
            h1.style.color = ''
            sum.style.color = ''

        } else if (event.target.value == 8) {
            body.style.backgroundImage = ''
            h1.style.color = ''
            sum.style.color = ''

        } else if (event.target.value == 9) {
            body.style.backgroundImage = ''
            h1.style.color = ''
            sum.style.color = ''
        }
    })
})