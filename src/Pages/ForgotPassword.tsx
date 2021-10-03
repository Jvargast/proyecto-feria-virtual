import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';


type FormElement = React.FormEvent<HTMLFormElement>;


export default function ForgotPassword() {

    

    const [mail, setMail] = useState<string>('');
    
    

    function backToLogin() {
        
    }

    const handleSubmit=(e:FormElement) => {
        e.preventDefault();
        console.log(mail)
    }

    return (
        <div>
            <section>
                <main className="main-main" role="main">
                    <article className="login-form">
                        <div className="form-container">
                            <div className="head-form">
                                <div className="container-full">
                                    <img src="./assets/images/recursos-didaxia/Lienzo bandera.png" alt="Didaxia Logo" className="didaxia-lienzo" />
                                    <div className="container-formb">
                                        <h1 className="logo-d">DIDAXIA LOGO</h1>
                                        <div className="primero segundo tercero cuarto quinto">
                                            <h2 className="logo-d septimo">¿Problemas para entrar?</h2>
                                            <p className="logo-d octavob ">Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.</p>
                                        </div>
                                        <form className="form" onSubmit={handleSubmit}>
                                            <div className="primero segundo tercero cuarto">
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input">Correo electrónico</span>
                                                            <input
                                                                onChange={e => setMail(e.target.value)}
                                                                aria-required="true" autoCapitalize="off" autoCorrect="off"
                                                                type="text"
                                                                className="input first second focus-visible" />
                                                        </label>
                                                        <div className="fix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="primero segundo tercero cuarto septimo octavoa decimo">
                                                <button className="btn-suba" type="submit">
                                                    <div className="primero segundo tercero cuarto">Enviar enlace</div>
                                                </button>
                                            </div>
                                            <div className="primero segundo tercero cuarto">
                                                <Link to="login" className="btn-subb" type="submit">
                                                    <div className="primero segundo tercero cuarto">Volver</div>
                                                </Link>
                                            </div>


                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>

                </main>





            </section>
            <nav className="logo-container">

            </nav>

            {/* <Footer /> */}
        </div>
    );
}