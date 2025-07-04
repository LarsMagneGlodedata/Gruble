document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container')
    const sum = document.getElementById('sum')
    const clearAll = document.getElementById('clear')
    for (let i = 0; i < 6*6; i++) {
        const innerContainer = document.createElement('div')
        innerContainer.classList.add('innerContainer')

        const input = document.createElement('textarea')
        input.rows = '1'
        input.classList.add('input')
        input.style.textTransform = 'capitalize'

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
        }

        if (i < 7) {
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


})