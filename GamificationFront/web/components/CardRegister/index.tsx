import React from "react";
import styles from './register.module.css'

interface MyProps {
  main?: string
}

const RegisterComponent = ({}: MyProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card_wrapper}>
        <div className={styles.box_body}>
          <div className={styles.box_header}>
            <p>Registrar </p>
            {/* <img /> */}
          </div>
          {/* <div className={styles.box_body}> */}
          <div className={styles.box_campo}>
            <label className={styles.label}>NOMBRE</label>
            <div className={styles.box_merge}>
              <div className={styles.box_avatar}></div>
              <input className={styles.input} placeholder={'Escribe tu nombre'} />
            </div>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>APELLIDOS</label>
            <div className={styles.box_merge}>
              <div className={styles.box_avatar}></div>
              <input className={styles.input} placeholder={'Escribe tus apellidos'} />
            </div>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>CORREO</label>
            <div className={styles.box_merge}>
              <div className={styles.box_avatar}></div>
              <input className={styles.input} placeholder={'Escribe tus correo'} type="email" />
            </div>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>CODIGO</label>
            <div className={styles.box_merge}>
              <div className={styles.box_avatar}></div>
              <input className={styles.input} placeholder={'Escribe tus código'} type="number" />
            </div>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>CONTRASEÑA</label>
            <div className={styles.box_merge}>
              <div className={styles.box_avatar}></div>
              <input
                className={styles.input}
                placeholder={'Escribe tus contraseña'}
                type="password"
              />
            </div>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>LENGUAJE DE PROGRAMACION</label>
            <select className={styles.select}>
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>ESPECIALIZACION</label>
            <select className={styles.select}>
              <option value="Data Science">Data Science</option>
              <option value="Software Develope">Software Developer</option>
            </select>
          </div>
          <div className={styles.box_campo}>
            <label className={styles.label}>IDIOMA</label>
            <select className={styles.select}>
              <option value="Ingles">Ingles</option>
              <option value="Español">Español</option>
            </select>
          </div>
          <div className={styles.box_button}>
            <a href="/login" className={styles.a}>
              Volver
            </a>
            <button className={styles.button}>REGISTRAR</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
export default RegisterComponent
