document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container')
    const sum = document.getElementById('sum')
    const clearAll = document.getElementById('clear')
    const randomButton = document.getElementById('randomLetter')

    // 
    // Gruble grid

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

    // 
    // Total sum function

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

    // 
    // Clear board button

    const poengFields = document.querySelectorAll('.poeng')
    const inputFields = document.querySelectorAll('.input')
    clearAll.addEventListener('click', () => {
        const userConfirm = confirm('Are you sure you want to clear everything?')
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

    // 
    // Letter generator

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
    
    // 
    // Background themes

    const bgc = document.getElementById('bgc'); // This will be your <select> element
    const body = document.querySelector('body');
    const h1 = document.getElementById('h1');
    const txtField = document.querySelectorAll('.input');

    // Define your themes as an array of objects
    const themes = [
        {
            name: "Default Theme", // This will be the text for your option
            value: 0, // Corresponds to event.target.value
            styles: {
                backgroundImage: '',
                colorH1: '',
                colorSum: '',
                backgroundRepeat: '',
                backgroundSize: '',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Gruble",
            value: 1,
            styles: {
                backgroundImage: `url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                colorH1: 'black',
                colorSum: 'white',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Sweaty Speedrunner",
            value: 2,
            styles: {
                backgroundImage: 'url("https://media1.tenor.com/m/kq7GyBPPIj0AAAAd/sweaty-speedrunner.gif")',
                colorH1: 'bisque',
                colorSum: 'black',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                txtFieldBackground: 'rgba(255, 255, 255, 0.5)'
            }
        },
        {
            name: "Sunrise",
            value: 3,
            styles: {
                backgroundImage: 'url("https://media1.tenor.com/m/fCqfvusQwzQAAAAC/sunrise.gif")',
                colorH1: 'white',
                colorSum: 'white',
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Pastel splash",
            value: 4,
            styles: {
                backgroundImage: 'url("https://www.designyourway.net/blog/wp-content/uploads/2018/11/pastel-background-goo.jpg")',
                colorH1: 'darkviolet',
                colorSum: 'darkviolet',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Brainrot",
            value: 5,
            styles: {
                backgroundImage: `url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN4bmtibnZkeDAybW9wa3J4ZW92eDN0NGx0dmMzYWdoN2J1OW80YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dkUtjuBEdICST5zG7p/giphy.gif")`,
                colorH1: 'black',
                colorSum: 'black',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                txtFieldBackground: 'rgba(255, 255, 255, 0.5)'
            }
        },
        {
            name: "Sunset",
            value: 6,
            styles: {
                backgroundImage: `url("https://images.unsplash.com/photo-1498590880827-3f79fdcd7fbe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                colorH1: 'white',
                colorSum: 'white',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Colorful",
            value: 7,
            styles: {
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1684952851101-6ab3e41b0448?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                colorH1: 'black',
                colorSum: 'black',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '',
                txtFieldBackground: ''
            }
        },
        {
            name: "Hehehe",
            value: 8,
            styles: {
                backgroundImage: `url("https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif")`,
                colorH1: 'black',
                colorSum: 'white',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                txtFieldBackground: 'rgba(255, 255, 255, 0.5)'
            }
        },
        {
            name: "Mountains",
            value: 9,
            styles: {
                backgroundImage: `url("https://www.campervannorway.com/assets/img/blog/588.png")`,
                colorH1: 'black',
                colorSum: 'bisque',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                txtFieldBackground: ''
            }
        },
        {
            name: "Payphone meme",
            value: 10,
            styles: {
                backgroundImage: `url("https://media1.tenor.com/m/wP4LSSdF2cMAAAAC/aaaa-hola.gif")`,
                colorH1: 'black',
                colorSum: 'bisque',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                txtFieldBackground: 'rgba(255, 255, 255, 0.5)'
            }
        }
    ];

    // Function to dynamically create options for the select element
    function createThemeOptions() {
        themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme.value;
            option.textContent = theme.name;
            bgc.appendChild(option);
        });
    }

    // Call the function to create options when the script loads
    createThemeOptions();

    // Event listener for theme changes
    bgc.addEventListener('change', (event) => {
        // Reset all previous styles
        txtField.forEach(item => {
            item.style.backgroundColor = '';
        });
        body.style.backgroundImage = '';
        h1.style.color = '';
        sum.style.color = '';
        body.style.backgroundRepeat = '';
        body.style.backgroundSize = '';
        body.style.backgroundPositionX = '';

        // Find the selected theme object
        const selectedTheme = themes.find(theme => theme.value == event.target.value);

        if (selectedTheme) {
            const styles = selectedTheme.styles;

            body.style.backgroundImage = styles.backgroundImage;
            h1.style.color = styles.colorH1;
            sum.style.color = styles.colorSum;
            body.style.backgroundRepeat = styles.backgroundRepeat;
            body.style.backgroundSize = styles.backgroundSize;
            body.style.backgroundPositionX = styles.backgroundPositionX;

            // Apply background to text fields if specified
            if (styles.txtFieldBackground) {
                txtField.forEach(item => {
                    item.style.backgroundColor = styles.txtFieldBackground;
                });
            }
        }
    });
})