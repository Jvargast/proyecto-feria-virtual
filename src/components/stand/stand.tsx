import { url } from 'inspector';
import React from 'react'
import { useParams } from 'react-router'
import standVideos from "../utils/stands-videos.jsx";

interface StandParams {
    standId: string
}

export default function Stand() {

    let { standId }  = useParams<StandParams>();

    let numberOfChallenges = 3;
    
    /** Consulta para saber si los desafios para este stand y usuario están completos */
    let challengesDisplay: any[] = [];

    const challengeCompleted = true;

    for (let i = 1; i <= numberOfChallenges; i++) {
        if (challengeCompleted) {
            challengesDisplay.push(<img  className={'silueta-trofeo trofeo'} src={`/assets/images/recursos-didaxia/trofeos/completado/${i}.png`}></img>);
        } else {
            challengesDisplay.push(<img  className={'silueta-trofeo trofeo'} src={`/assets/images/recursos-didaxia/trofeos/incompleto/${i}.png`}></img>);

        }
    }

    console.log('Estamos en el stand ', standId);

    return (
        <div className="park-background scrollable-content">
            <div className={'stand-container'} style={
                {
                    backgroundImage: `url('/assets/images/recursos-didaxia/stands/${standId}/Panel.png')`,
                    
                    // padding: `30px`,
                    // minHeight: `90%`,
                    // maxHeight: `80%`,
                    // position: `fixed`,
                    // backgroundAttachment: `attach`,
                    // backgroundRepeat: `no-repeat`,
                    // backgroundPosition: `fixed`,
                }}>
                    


                    <div className="columna"></div>
                    <div className="columna columna-3">
                            { standVideos[parseInt(standId)].mainVideo}

                            <div className={'trofeo-container'}>

                            { challengesDisplay}
                            
                            </div>
                            <img  src={`/assets/images/recursos-didaxia/stands/${standId}/Mesa.png`} style={
                                {
                                    maxWidth: `200px`,
                                    
                                }}>
                            
                            </img>

                    </div>
                    <div className="columna"></div>
                    
            </div>
            <div className={'menu-icons'}>
                <a href="">
                    <img src="/assets/images/recursos-didaxia/stands/icons/Indice.png" alt="" />
                </a>
                <a href="">
                    <img src="/assets/images/recursos-didaxia/stands/icons/Volver.png" alt="" />
                </a>
            </div>
        </div>
    )
}
