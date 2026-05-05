// l'hook "useEffect()" è un altro hook preso direttamente dalla libreria di React che permette di
// introdurre nei componenti a funzione l'interazione con i metodi di lifecycle dei componenti

// I React Hooks sono GIÀ INCLUSI in React 19, non abbiamo ulteriori dipendenze da installare.

// Ogni volta che intenderete utilizzare i REACT HOOKS, dovete tenere a mente le DUE REGOLE DEGLI HOOKS:
// 1) I React Hooks possono venire utilizzati SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) I React Hooks possono venire utilizzati nei componenti a funzione FUORI da CICLI, CONDIZIONI,
// altre funzioni eccetera, PRIMA del return statement. (gli Hooks devono SEMPRE venire invocati nella stessa maniera)

import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const EffectExample = function () {
  // useEffect viene utilizzato per rimpiazzare nei componenti a funzione i seguenti metodi di lifecycle:
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount (che non abbiamo visto insieme)

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Gian')
  // poichè può rimpiazzare TUTTI e 3 questi metodi (molto diversi tra loro), è importante capire come
  // utilizzare i suoi PARAMETRI

  // useEffect(funzioneAutomaticamenteEseguita, arrayDiDipendenze?)
  // il primo parametro è il codice che volete venire eseguito una volta all'avvio, oppure ad ogni update etc.
  // il secondo parametro rappresenta un array di valori: OGNI VOLTA che uno di questi valori cambierà, la funzione
  // al primo parametro verrà RI-ESEGUITA.

  // COME UN COMPONENTDIDMOUNT
  useEffect(() => {
    console.log('SONO COME COMPONENTDIDMOUNT')
  }, [])
  // la funzione all'avvio viene lanciata automaticamente al montaggio del componente, e verrà ri-eseguita
  // ogni volta che anche UNA degli elementi dell'array delle dipendenze cambierà.
  // se lascio l'array delle dipendenze VUOTO, sto dando ZERO motivi allo useEffect per RI-LANCIARE la funzione

  // COME UN COMPONENTDIDUPDATE
  useEffect(() => {
    console.log('SONO COME COMPONENTDIDUPDATE')
    // setName('STEFANO') // <-- LOOP INFINITO
  })
  // non mettere l'array delle dipendenze vuol dire che TUTTO è una dipendenza: vuol dire che un qualsiasi
  // cambiamento di qualsiasi prop o di qualsiasi state sarà una motivazione valida per RI-LANCIARE la funzione

  // COME UN COMPONENTDIDUPDATE + PREVPROPS & PREVSTATE
  useEffect(() => {
    console.log('ASCOLTO I CAMBIAMENTI DI COUNTER')
  }, [counter])
  // sarebbe come in un componentDidUpdate fare: if(prevState.counter !== this.state.counter){}

  return (
    <div>
      <h2>Componente EFFECTEXAMPLE</h2>
      <h4>Metto un counter pure qua: {counter}</h4>
      <h4>Il nome ora è: {name}</h4>
      <div>
        <Button variant="warning" onClick={() => setCounter(counter + 1)}>
          CONTA
        </Button>
        <Button
          variant="success"
          onClick={() => setName(name === 'Gian' ? 'Giorgio' : 'Gian')}
        >
          CAMBIA NOME
        </Button>
      </div>
    </div>
  )
}

export default EffectExample
