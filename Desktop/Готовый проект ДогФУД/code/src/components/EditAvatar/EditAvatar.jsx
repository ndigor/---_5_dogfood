import {useState} from "react";
import {api} from "../../utils/api";
import {Close} from "../../assets/icons/Close";
import './editAvatar.css'

export const EditAvatar = ({isActive, setIsActive, setIsRefetch}) => {
    const [avatarLink, setAvatarLink] = useState('')

    const handleEditAvatar = async () => {
        if(avatarLink.length) {
            try {
                const res = await api.getResetUserAvatar({avatar: avatarLink});
                setIsRefetch(true)
                setTimeout(() => {
                    setIsActive(false)
                    setIsRefetch(false)
                }, )
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            {isActive ?
                <div className='editAvatar'>
                    <div className='editAvatar__body'>
                        <button className='editAvatar__close' onClick={() => setIsActive(false)}>
                            <Close />
                        </button>
                        <h3 style={{textAlign: 'center'}}>Изменить аватар</h3>
                        <div className={'editAvatar__field'}>
                            <p>Ссылка</p>
                            <input
                                type={'text'}
                                placeholder={'Ссылка на изображение'}
                                value={avatarLink}
                                onChange={(e) => setAvatarLink(e.target.value)}
                            />
                        </div>
                        <button className='editAvatar__send' onClick={handleEditAvatar}>Сохранить</button>
                    </div>
                </div>
                : ''}
        </>

    )
}