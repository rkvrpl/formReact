import { useState } from 'react'
import style from './Form.module.css'

function Form() {

	const [inputText, setInputText] = useState('')
	const [wasInputTextTouch, setWasInputTextTouch] = useState(false)

	const inputChangeHandler = (event) => {
		setInputText(event.target.value)
	};
	const isEnteredTextValid = inputText.trim() !== ""

	const isNameInputInvalid = !isEnteredTextValid && wasInputTextTouch

	const inputTextLostFocusHandler = () => {
		setWasInputTextTouch(true)
	};

	const inputNameClasses = isNameInputInvalid
		? style.form + ' ' +  style.invalid
		: style.form

	let isFormValid = false

	if (isEnteredTextValid) {
		isFormValid = true
	}
	const formSubmitHandler = (event) => {
		event.preventDefault()
		setWasInputTextTouch(true)
		if (!isEnteredTextValid) {
		console.log('error')
		return false
		}
		setWasInputTextTouch(false)
		setInputText('')
	}


	return (
	<>
		<form onSubmit={formSubmitHandler}>
			<label htmlFor='text'>Введите текст</label>
			<input type='text'
			id ='text'
			className={inputNameClasses}
			onChange={inputChangeHandler}
			onBlur={inputTextLostFocusHandler}/>
			{isNameInputInvalid && 
			<span>Введите текст, пожалуйста</span>}
			<input type='submit' value='Сохранить'/>
		</form>
		<p>{inputText}</p>
	</>
	)
}

export default Form