export const fetchJoke = async (noun) => {
  const prompt = `
  Write me a joke about a ${noun}. Return the response in the following parsable JSON format:

  {
    "Q": "question",
    "A": "answer"
  }
`
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 2048,
      temperature: .5
    })
  })
  const data = await response.json()
  const responseText = data.choices[0].text
  return JSON.parse(responseText)
}
