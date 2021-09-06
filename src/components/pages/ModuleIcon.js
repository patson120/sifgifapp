import React, {useState} from 'react';
import '../css/moduleIcon.css';

export const ModuleIcon = (props) => {
    const [icone, setIcone] = useState({});

    const handleClick = (icon) => {
        setIcone(icon)
        let modal = document.querySelector('.ModuleIcon .Modal');
        modal.style.display = 'block';
    }

    return (
        <div className="ModuleIcon">
            {props.object.map(icon => (
                <div key={icon.id} className="block" onClick={()=>{handleClick(icon)}}>
                    <h4 style={{textAlign: 'center'}} className="titre">{icon.titre}</h4>
                    <div className="icon">
                        <img src={icon.icon} alt="" />
                    </div>
                </div>
            ))}
            <div>
                <Modal icon={icone}/>
            </div>
        </div>
    );
}

const Modal = (props) => {
    const {icon} = props;
    return (
        <div className="Modal">
            <div className="Modal-content">
                <div className="Modal-body">
                    <h1 className="titre">{icon.titre}</h1>
                    <div className="icon">
                        <img src={icon.icon} alt="" />
                    </div>
                    <p className="description">{icon.texte}</p>
                </div>
            </div>
        </div>
    );
}

window.addEventListener('click', function(ev) {
    let modal = document.querySelector('.ModuleIcon .Modal');
    if (ev.target === modal) {
      modal.style.display = 'none';
    }
})
