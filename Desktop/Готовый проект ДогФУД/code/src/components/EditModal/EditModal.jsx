import './editModal.css'
import {Close} from "../../assets/icons/Close";
import {useEffect, useState} from "react";
import {api} from "../../utils/api";
export const EditModal = ({isActive, setIsActive, setIsRefetch, name, about}) => {
    const [nameValue, setNameValue] = useState('')
    const [aboutMeValue, setAboutMeValue] = useState('')

    console.log(name, 'name')
    console.log(nameValue, 'nameValue')

    const handleChangeInfo = async () => {
        if(nameValue.length > 2 && aboutMeValue.length > 2 ) {
            try {
                const res = await api.editUserInfo({name: nameValue, about: aboutMeValue});
                setIsRefetch(true)
                setTimeout(() => {
                    setIsRefetch(false)
                    setIsActive(false)
                }, )
            } catch (error) {
                console.log(error)
                alert('Минимальная длина волей 2 символа');
            }
        }

    }

    useEffect(() => {
        setNameValue(name)
        setAboutMeValue(about)
    }, [name, about])

    return (
        <>
            {isActive ?
                <div className='editModal'>
                    <div className='editModal__body'>
                        <button className='editModal__close' onClick={() => setIsActive(false)}>
                            <Close />
                        </button>
                        <h3 style={{textAlign: 'center'}}>Изменение информации обо мне</h3>
                        <div className={'editModal__field'}>
                            <p>Моё имя</p>
                            <input
                                type={'text'}
                                placeholder={'Ваше имя'}
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </div>
                        <div className={'editModal__field'}>
                            <p>Обо мне</p>
                            <input
                                type={'text'}
                                placeholder={'О Вас'}
                                value={aboutMeValue}
                                onChange={(e) => setAboutMeValue(e.target.value)}
                            />
                        </div>
                        <button className='editModal__send' onClick={handleChangeInfo}>Отправить</button>
                    </div>
                </div>
                : ''}
        </>

    )
}