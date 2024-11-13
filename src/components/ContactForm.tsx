import { useForm, SubmitHandler } from "react-hook-form"

export const ContactForm = () => {

    return(
        <form className="grid grid-cols-1 gap-2">
            <input type="text" />
            <input type="text" />
            <textarea />
            <button type="submit"></button>
        </form>
    );
}