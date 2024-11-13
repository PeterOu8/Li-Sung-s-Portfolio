import { useForm, SubmitHandler } from "react-hook-form"

export const ContactForm = () => {

    return(
        <form className="flex flex-col gap-8">
            <input type="text" />
            <input type="text" />
            <textarea />
            <button type="submit"></button>
        </form>
    );
}