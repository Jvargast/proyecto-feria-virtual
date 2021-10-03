import React, { ChangeEvent, useState } from 'react'
import GRADES from "../model/grades/grades";
import SUBJECTS, { SubjectValue} from "../model/subjects/subjects";
import { onRegister } from "../components/Auth.api";

interface RegisterValues  {
    firstName: string,
    lastName: string,
    age: string,
    phone: string,
    email: string,
    address: '',
    condominium: '',
    username: string,
    password: string,
    role: string,
    grade?: number,
    school?: string,
    childrenNumber?: number,
    professorSchool?: string,
    professorSubject?: string
}

const initialValues: RegisterValues = {

    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    address: '',
    condominium: '',
    username: '',
    password: '',
    role: 'ALUMNO',
    grade: 9,
    school: '',
    childrenNumber: 1,
    professorSchool: '',
    professorSubject: SubjectValue.MAT
}





export default function Register() {

    
    let initStatus = {
        firstName: false,
        lastName: false,
        age: false,
        phone: false,
        email: false,
        address: false,
        condominium: false,
        username: false,
        password: false,
        role: true,
        grade: true,
        school: false,
        childrenNumber: true,
        professorSchool: true,
        // professorSchool: registerValues.role == 'PROFESOR' ? false : true,
        professorSubject: true
    }
    
    const [registerValues, setRegisterValues] = useState(initialValues);
    const [formFieldsStatus, setFormFieldsStatus] = useState(initStatus);
    
    // setFormFieldsStatus(initStatus);

    const isFormValid = (formStatus: any) => {

        let isValid = true;
        for ( let field of Object.keys(formStatus)) {
            if (formStatus[field] == false) {
                return false;
            }
        }
    
        return isValid;
    }
    
 

    const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        
        const {name, value} = event.target;
        setRegisterValues({
            ...registerValues,
            [name]: value
        })
        if (value == '') {
            setFormFieldsStatus({
                ...formFieldsStatus,
                [name]: false
            })
        } else {
            setFormFieldsStatus({
                ...formFieldsStatus,
                [name]: true
            })

        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(registerValues);
        console.log(formFieldsStatus);
        console.log(isFormValid(formFieldsStatus));
        if (isFormValid(formFieldsStatus)) {
             onRegister(registerValues);

        } else {
            alert('Rellena todos los campos el formulario');
        }
    }


    return (


        <div className="main-container">
            
            <img src="./assets/images/recursos-didaxia/Lienzo bandera.png" alt="lienzo" className="didaxia-lienzo" />


            <div className="container-form">
                <h1 className="logo-d">DIDAXIA LOGO</h1>
                <form  className="form" id="loginForm" >
                    <div className="primero segundo tercero cuarto quinto">
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Nombre</span>
                                    <input name="firstName"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.firstName} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Apellido</span>
                                    <input name="lastName"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.lastName} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Edad</span>
                                    <input name="age"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.age} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Correo electrónico</span>
                                    <input name="email"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.email} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Teléfono</span>
                                    <input name="phone"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.phone} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Dirección</span>
                                    <input name="address"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.address} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Condominio</span>
                                    <input name="condominium"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.condominium} onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Usuario o correo electrónico</span>
                                    <input aria-label="Usuario o correo electrónico" name="username"
                                        aria-required="true" autoCapitalize="off" autoCorrect="off"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.username} onChange={handleInputChange} />
                                </label>
                                <div className="fix"></div>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Contraseña</span>
                                    <input aria-label="Contraseña" aria-required="true"
                                        autoCapitalize="off" autoCorrect="off" name="password"
                                        type="password" className="input first second focus-visible" value={registerValues.password} onChange={handleInputChange} />
                                </label>
                                <div className="fix">
                                    <div className="primero segundo tercero cuarto sexto">
                                        <button className="btn btn-show btn-btn"
                                            type="button">Mostrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <div className="label-user inputd">
                                    <span className="user-input">Rol</span>
                                    <select className="input first second focus-visible" name="role"  value={registerValues.role} onChange={handleInputChange} >
                                        <option value="ALUMNO">Estudiante</option>
                                        <option value="APODERADO">Apoderado</option>
                                        <option value="PROFESOR">Profesor</option>
                                    </select>
                                </div>    
                            </div>
                        </div>
                        {
                            (() => {

                                switch (registerValues.role) {
                                    case 'ALUMNO':
                                        return (
                                            <>
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <div className="label-user inputd">
                                                            <span className="user-input">Curso</span>
                                                            <select className="input first second focus-visible" name="grade"  value={registerValues.grade} onChange={handleInputChange} >
                                                                { 
                                                                    (() => {
                                                                        let options = [];
                                                                        for (let course of GRADES) {
                                                                            options.push(<option key={course.value} value={course.value}>{course.name}</option>)
                                                                        }
                                                                        return options;
                                                                    })()
                                                                }
                                                            </select>
                                                        </div>    
                                                    </div>
                                                </div>
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input">Colegio</span>
                                                            <input type="text" name="school" className="input first second focus-visible" value={registerValues.school} onChange={handleInputChange} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                        break;
                                    case 'APODERADO':
                                        return (
                                            <div className="first-layer">
                                                <div className="user-container">
                                                    <label className="label-user inputd">
                                                        <span className="user-input">Número de hijos</span>
                                                        <select className="input first second focus-visible" name="childrenNumber"  value={registerValues.childrenNumber} onChange={handleInputChange} >
                                                                { 
                                                                    (() => {
                                                                        let options = [];
                                                                        for (let i = 1; i <=10; i++) {
                                                                            options.push(<option key={i} value={i}>{i + ' Hijo/as'}</option>)
                                                                        }
                                                                        return options;
                                                                    })()
                                                                }
                                                            </select>
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                        break;
                                    case 'PROFESOR':
                                        return (
                                            <>
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <div className="label-user inputd">
                                                            <span className="user-input">Asignatura impartida</span>
                                                            <select className="input first second focus-visible" name="professorSubjec"  value={registerValues.professorSubject} onChange={handleInputChange} >
                                                                { 
                                                                    (() => {
                                                                        let options = [];
                                                                        for (let subject of SUBJECTS) {
                                                                            options.push(<option key={subject.value} value={subject.value}>{subject.name}</option>)
                                                                        }
                                                                        return options;
                                                                    })()
                                                                }
                                                            </select>
                                                        </div>    
                                                    </div>
                                                </div>
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input">Colegio donde trabaja</span>
                                                            <input type="text" name="professorSchool" className="input first second focus-visible" value={registerValues.professorSchool} onChange={handleInputChange} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                        break;
                                        
                                }
                            })()
                        }

                        <div className="primero segundo tercero cuarto septimo octavo noveno decimo">
                            {
                                isFormValid(formFieldsStatus) ? <span></span> : <div className="text-danger invalid-field mb-3">Debes rellenar todos los campos</div> 
                            }
                            <button className="btn btn-init btn-sub" onClick={handleSubmit}>
                                <div className="primero segundo tercero cuarto">Registrarse</div>
                            </button>
                        </div>
                    </div>

                </form>
                           
            </div>

        </div>
    )
}
