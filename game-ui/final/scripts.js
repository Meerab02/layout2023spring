document
    .addEventListener('DOMContentLoaded', () => {

        // toggle "changing" state for fuel status bar
        document
            .getElementById('fuel-icon')
            .addEventListener('click', () => {
                document
                    .getElementById('fuel-bar')
                    .classList
                    .toggle('changing')
            })

        // toggle fuel warning popup
        document
            .getElementById('fuel-icon')
            .addEventListener('click', () => {
                document
                    .getElementById('fuel')
                    .classList
                    .toggle('warning')
            })

        // cycle through "high, med, low, none" status bar states 
        document
            .getElementById('collect-icon')
            .addEventListener('click', () => {
                const statusBar = document.getElementById('collect-bar')
                // variable for array of classes (list)
                const cycleStates = statusBar.dataset.cyclestates.split(',')
                const currentState = statusBar.dataset.currentstate
                // variable for current position in the array list -> -1
                const position = cycleStates.indexOf(currentState)
                const nextState = cycleStates[position + 1] || cycleStates[0]
                // setting current (first) class to "high"
                statusBar.dataset.currentstate = nextState
                statusBar.classList.remove(currentState)
                // adding next class ("high") to the array to be applied
                statusBar.classList.add(nextState)
            })

        // toggle play button
        document
            .getElementById('button_container')
            .addEventListener('click', () => {
                document
                    .getElementById('button_container')
                    .classList
                    .toggle('playing')
            })

        // while game is on "play" mode, toggle maps container to run animation
        document
            .getElementById('button_container')
            .addEventListener('click', () => {
                document
                    .getElementById('map_container')
                    .classList
                    .toggle('loop')
            })

        // toggle distance meter, as map changes states
        document
            .getElementById('button_container')
            .addEventListener('click', () => {
                document
                    .getElementById('distance')
                    .classList
                    .toggle('progress')
            })

        // toggle 4 states for shield powerup
        document
            .getElementById('shield')
            .addEventListener('click', () => {
                const powerup = document.getElementById('shield')
                // variable for array of classes (list)
                const cycleStates = powerup.dataset.cyclestates.split(',')
                const currentState = powerup.dataset.currentstate
                // variable for current position in the array list -> -1
                const position = cycleStates.indexOf(currentState)
                const nextState = cycleStates[position + 1] || cycleStates[0]
                // setting current (first) class to "unavailable"
                powerup.dataset.currentstate = nextState
                powerup.classList.remove(currentState)
                // adding next class ("unavailable") to the array to be applied
                powerup.classList.add(nextState)
            })

        // toggle 4 states for weapon powerup
        document
            .getElementById('weapon')
            .addEventListener('click', () => {
                const powerup = document.getElementById('weapon')
                // variable for array of classes (list)
                const cycleStates = powerup.dataset.cyclestates.split(',')
                const currentState = powerup.dataset.currentstate
                // variable for current position in the array list -> -1
                const position = cycleStates.indexOf(currentState)
                const nextState = cycleStates[position + 1] || cycleStates[0]
                // setting current (first) class to "unavailable"
                powerup.dataset.currentstate = nextState
                powerup.classList.remove(currentState)
                // adding next class ("unavailable") to the array to be applied
                powerup.classList.add(nextState)
            })
    })