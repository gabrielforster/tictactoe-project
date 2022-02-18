import React from 'react'
import './main.css'

function TicTacToe() {
  return (
    <main>
      <h1 className='game-tittle'>Jogo da velha !</h1>
      <section className='game-board'>
        <div className='board'>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
          <div className='cell'>.</div>
        </div>
      </section>
    </main>
  )
}

export default TicTacToe