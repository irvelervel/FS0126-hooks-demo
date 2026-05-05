// questo componente React sarà creato tramite una FUNZIONE ma grazie ai React Hooks
// sarà in grado di attingere alle funzionalità di STATO dei componenti React.

import { Button } from 'react-bootstrap'
import { useState } from 'react'

// I React Hooks sono GIÀ INCLUSI in React 19, non abbiamo ulteriori dipendenze da installare.

// Ogni volta che intenderete utilizzare i REACT HOOKS, dovete tenere a mente le DUE REGOLE DEGLI HOOKS:
// 1) I React Hooks possono venire utilizzati SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) I React Hooks possono venire utilizzati nei componenti a funzione FUORI da CICLI, CONDIZIONI,
// altre funzioni eccetera, PRIMA del return statement. (gli Hooks devono SEMPRE venire invocati nella stessa maniera)

const StateExample = function () {
  // GLI HOOKS VANNO QUI

  const [counter, setCounter] = useState(0) // questo 0 indica il valore iniziale della proprietà di stato
  // useState() è una funzione che ritorna un array di DUE ELEMENTI
  // counter sarebbe la vostra singola proprietà dello state, mentre setCounter è l'unico modo
  // per cambiare il valore di counter (perchè counter è READ-ONLY)

  //   const giangiorgio = useState()
  //   const primo = giangiorgio[0]
  //   const secondo = giangiorgio[1]

  const [name, setName] = useState('Mario')

  return (
    <div>
      <h2>Componente STATEEXAMPLE</h2>
      <Button
        variant="info"
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        INCREMENTA
      </Button>
      <h4>Il valore del counter è: {counter}</h4>
      <h4
        onClick={() => {
          setName(name === 'Mario' ? 'Luigi' : 'Mario')
        }}
      >
        Mi chiamo {name}
      </h4>
    </div>
  )
}

export default StateExample

// state = {
//     prenotazioni: [],
//     isLoading: true,
//     isError: false,
//     counter: 0,
//     name: 'Mario'
// }
