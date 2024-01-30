import { IconEmail } from "@/assets/icons/icons";


export default function Contact() {

  return (
    <div className='container-h2 container-contact'>
      <h2 className='landing-h2'>Contactame</h2>
      <p>
        Si quiere un retrato similar contáctame;
        Actualmente estoy disponible para trabajar.
      </p>
      <button className='button-form button-width'>
        <span style={{ marginRight: '10px' }}><IconEmail /></span>
        phi@yourname.com
      </button>
    </div>
  );
}
