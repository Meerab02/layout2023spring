document
    .addEventListener('DOMContentLoaded', () => {

        // toggle "changing" state for collect status bar
        document
            .getElementById('collect-icon')
            .addEventListener('click', () => {
                document
                    .getElementById('collect-bar')
                    .classList
                    .toggle('changing')
            })

        // cycle through "high, med, low, none" status bar states    
        document
            .getElementById('distance-icon')
            .addEventListener('click', () => {
                const statusBar = document.getElementById('distance-bar')
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

            document
            .getElementById('fuel-icon')
            .addEventListener('click', () => {
                const statusBar = document.getElementById('fuel-bar')
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

            // toggle "changing" map states + change pause button to play
            document
            .getElementById('pause')
            .addEventListener('click', () => {
                const pause = document.getElementById('pause');
                const play = document.getElementById('play');
                if (play.style.display === 'none')  {
                    //show the play, hide pause
                    play.style.display = 'block';
                    pause.style.display = 'none';
                } else {
                    play.style.display = 'none';
                    pause.style.display = 'block';
                }
            })

            // toggle scale for map - TEST
            //remove later
            // document
            // .getElementById('play')
            // .addEventListener('click', () => {
            //     document
            //         .getElementById('start')
            //         .classList
            //         .toggle('progress')
            // })

            document
            .getElementById('play')
            .addEventListener('click', () => {
                document
                    .getElementById('start')
                    .classList
                    .toggle('hide')
            })
            document
            .getElementById('middle')
            .addEventListener('click', () => {
                document
                    .getElementById('middle')
                    .classList
                    .toggle('hide')
            })
            document
            .getElementById('end')
            .addEventListener('click', () => {
                document
                    .getElementById('end')
                    .classList
                    .toggle('hide')
            })
            


    })