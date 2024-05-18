import { useState } from 'react'
import style from './Form.module.css'

function Form() {

	const [inputText, setInputText] = useState('')
	const [wasInputTextTouch, setWasInputTextTouch] = useState(false)

	const inputChangeHandler = (event) => {
		setInputText(event.target.value.toUpperCase())
	};
	const isEnteredTextValid = inputText.trim() !== ""

	const inputTextInvalid = !isEnteredTextValid && wasInputTextTouch

	const inputTextLostFocusHandler = () => {
		setWasInputTextTouch(true)
	};

	const inputNameClasses = inputTextInvalid
		? style.input + ' ' +  style.invalid
		: style.input

	
	const formSubmitHandler = (event) => {
		event.preventDefault()
		setWasInputTextTouch(true)
		console.log(inputText)
		// setInputText('')
		if (!isEnteredTextValid) {
		console.log('error')
		return false
	}
	}


	return (
	<>
		<form className={style.form} onSubmit={formSubmitHandler}>
			<label htmlFor='text'>Введите текст</label>
			<input type='text'
			id ='text'
			className={inputNameClasses}
			onChange={inputChangeHandler}
			onBlur={inputTextLostFocusHandler}/>
			{inputTextInvalid && 
			<span>Введите текст, пожалуйста</span>}
			<button onClick={()=> inputText} type='submit'>Сохранить</button>
		</form>
		<p>{inputText}</p>
	</>
	)
}

export default Form
