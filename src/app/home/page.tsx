'use client'
export default function page() {
    return (
       <fieldset style={{ padding: '10px' }}>
        <label id="terms">
          <input type="checkbox" role="switch" id="terms" name="terms" />
          I agree to the <a href="#" onClick={() => console.log()}>Privacy Policy</a>
        </label>
      </fieldset>
    );
}
