import React, { useState } from 'react'
import { fetchJoke } from '../utils/openaiApi'

const Joke = () => {
  const [noun, setNoun] = useState('')
  const [loading, setLoading] = useState(false)
  const [joke, setJoke] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setJoke(null)
    let values = noun
    if (!values) {
      values = 'spaceship'
      setNoun('spaceship')
    }

    const jokeResponse = await fetchJoke(noun)
    setJoke(jokeResponse)
    setLoading(false)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        {/* <h2 className="text-md font-bold mb-4 pb-2 border-b border-gray-300">Card Title</h2>
  <p className="text-gray-700 text-sm">This is some card content.</p> */}
        <h3>Tell me a joke about:</h3>
        <small>Provide a noun. Person, place or thing</small>
        {/* TODO Verify we have a single word */}
        <form className='' onSubmit={handleSubmit}>
          <input
            type='text'
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
            className='h-10 w-full rounded border p-2 text-sm'
            placeholder='Spaceship'
            disabled={loading}
          />
          {!loading ? (
            <button
              className='mt-2 group rounded-2xl h-8 w-60 bg-green-500 font-bold text-lg text-white relative overflow-hidden'
              disabled={loading}
              type='submit'
            >
              Tell me a joke!
              <div className='absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl'></div>
            </button>
          ) : (
            <>loading...</>
          )}
        </form>
        {joke && (
          <>
            <p>{joke.Q}</p>
            <p>{joke.A}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Joke
