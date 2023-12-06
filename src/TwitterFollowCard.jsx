import { useState } from "react"

export function TwitterFollowCard ({formatUserName, userName='unknown', name}){

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing 
    ? 'Siguiendo' 
    : 'Seguir'

    const buttonClassName = isFollowing 
    ? 'tw-followCardButton following' 
    : 'tw-followCardButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="tw-followCard">
    <header className="tw-followCardHeader">
        <img className="tw-followCardImg" src={`https://unavatar.io/${userName}`} alt="Avatar usuario" />
        <div className="tw-followCardInfo">
            <strong>{name}</strong>
            <span className="tw-followCardUsername">{formatUserName(userName)}</span>
        </div>
    </header> 
    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            {text}
        </button>
    </aside>
</article>
    )
}