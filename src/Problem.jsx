import { useState, useRef, useEffect } from "react"

export default function Problem({ template, problem, rerender }) {
    const [userAnswer, setUserAnswer] = useState('')
    const [isAnswerHidden, setIsAnswerHidden] = useState(true)
    const userInputRef = useRef(null)

    const handleEnter = event => {
        if(event.key === 'Enter' && isAnswerHidden) {
            setIsAnswerHidden(false)
        }
    }

    const getNewQuestion = () => {
        setIsAnswerHidden(true)
        setUserAnswer('')
        rerender()
    }

    useEffect(() => {
        if(userInputRef.current) {
            userInputRef.current.focus()
        }
    }, [isAnswerHidden])

    return (
        <main onKeyDown={handleEnter} className="col-span-12 lg:col-span-8 p-4 bg-white lg:flex lg:items-center lg:justify-center">
            <section className="flex flex-col gap-2 items-center">
                <h1 className="text-lg lg:text-2xl">{problem.question}</h1>
                {template.imageUrl && <img src={template.imageUrl} alt="Problem Image" className="max-w-[50%]" />}
                {!isAnswerHidden && <p className="text-md lg:text-xl">{problem.answer}</p> }
                <input ref={userInputRef} disabled={!isAnswerHidden} type="text" value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)} className="bg-slate-100 w-50 lg:w-100 border-2 border-slate-200 focus:border-b-2 focus:border-b-purple-500 focus:outline-hidden focus:outline-none p-1 lg:px-2 transition duration-200" />
                {isAnswerHidden && <button onClick={() => setIsAnswerHidden(false)} className="bg-purple-500 text-white px-4 py-1 lg:text-lg rounded cursor-pointer hover:bg-purple-600 transition duration-200">Submit</button>}
                {!isAnswerHidden && <button onClick={getNewQuestion} className="bg-purple-500 text-white px-4 py-1 lg:text-lg rounded cursor-pointer hover:bg-purple-600 transition duration-200">Next Question</button>}
            </section>
        </main>
    )
}