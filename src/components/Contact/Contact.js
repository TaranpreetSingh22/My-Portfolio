import "./contact.css";
import {useForm, ValidationError} from "@formspree/react";

export default function Contact(){
    const [state,handleSubmit]=useForm(process.env.REACT_APP_FORMSPREE_ID);
    const form=document.querySelector("form");
    const mail_id="taranpreetsinghrababi@gmail.com";
    const mailTo="mailto:taranpreetsinghrababi@gmail.com";
    const number="+91 8892794434";
    const telTo="tel:+91 8892794434";

    if (state.succeeded){
        alert("Thank You. Details Successfully Submitted.");
        form.reset();
    }
    

    return(
        <>
            <section id="Contact_section">
                <div id="contact-title">Contact Me</div>
                <div id="form-div">
                    <form onSubmit={handleSubmit}>
                        <div id="email-div">
                            <input type="email" placeholder="Enter Email" name="email" required/>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div id="msg-div">
                            <textarea placeholder="Enter Message" name="message" required></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <div id="submit-div">
                            <input type="submit" value={"send"} disabled={state.submitting} />
                        </div>
                    </form>

                    <div>OR</div>
                    <div>
                        <span>Mail me at <a href={mailTo}>{mail_id}</a></span>
                    </div>
                    
                    <div>OR</div>
                    <div>
                        <span>Call me to <a href={telTo}>{number}</a></span>
                    </div>
                </div>
            </section>
        </>
    )
}