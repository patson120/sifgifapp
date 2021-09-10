import React, {useState} from 'react';
import '../css/moduleIcon.css';

export const ModuleIcon = (props) => {
    const [icone, setIcone] = useState({});

    const handleClick = (icon) => {
        window.scrollTo(0, 0);
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
                    <div className="icon">
                        <img src={icon.icon} alt="" />
                    </div>
                    <h1 className="titre" style={{color: 'black'}}>{icon.titre}</h1>
                    <p className="description" style={{color: 'black'}}>{icon.texte}</p>
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
