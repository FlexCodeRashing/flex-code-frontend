"use client"

import React, {useState} from "react";
import Form from "next/form";
import Link from "next/link";
import Image from "next/image";
import icon_tick from "@/../public/tick.png"
import icon_cross from "@/../public/cross.png";
import "./module.css"

function ValidationCriteria({ text, value }: { text: string, value: boolean }) {
    const svg_tick = <path d="M5.5 12.5L10.167 17L19.5 8" stroke="currentcolor" strokeWidth="1.5"
                           strokeLinecap="round" strokeLinejoin="round"/>;
    const svg_cross = <path fill="currentcolor"
                            d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"/>;

    return <div className={"flex flex-row items-center"}>
        <Image
            src={value ? icon_tick : icon_cross}
            alt={value ? "tick" : "cross"}
            className={`login-card__validation-icon login-card__validation-icon-${value ? "green" : "red"}`}
        />
        <>{text}</>
    </div>
}

interface ModuleProps {
    type?: "login" | "register"
}

export default function Module({type = "login"}: ModuleProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    function submit_login(formData: FormData) {
        console.log(formData.get("email"))
    }

    function submit_register(formData: FormData) {
        console.log(formData.get("password"))
    }

    function validate_email(email: string): string {
        return "";
    }

    function validate_password(password: string, repeat_password: string) {
        const is_passwords_match = password.length > 0 && password === repeat_password;
        const is_length = password.length >= 10;
        const is_contain_upper = password.toLowerCase() !== password;
        const is_contain_lower = password.toUpperCase() !== password;
        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let is_contain_digits = false;
        digits.forEach((digit) => {if (password.includes(digit)) is_contain_digits = true});
        return [<>
            <ValidationCriteria text={"Не менее 10 символов"} value={is_length}/>
            <ValidationCriteria text={"Содержит хотя бы одну заглавную букву"} value={is_contain_upper}/>
            <ValidationCriteria text={"Содержит хотя бы одну строчную букву"} value={is_contain_lower}/>
            <ValidationCriteria text={"Содержит хотя бы одну цифру"} value={is_contain_digits}/>
            <ValidationCriteria text={"Пароли совпадают"} value={is_passwords_match}/>
        </>, is_passwords_match && is_length && is_contain_upper]
    }

    const [validation_password_component, validation_password] = validate_password(password, repeatPassword);
    const validation_email = validate_email(email);
    return <div className={"login-card flex-align flex-col"}>
        <h1>
            {type == "login" ? "Войти" : "Зарегистрироваться"}
        </h1>
        <Form action={type == "login" ? submit_login : submit_register} className={"login-card__form flex-align flex-col"} noValidate>
            <input
                className={"login-card__input"}
                name={"email"}
                type={"email"}
                autoComplete={"email"}
                placeholder={"Email"}
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <input
                className={"login-card__input"}
                name={"password"}
                type={"password"}
                autoComplete={"new-password"}
                placeholder={"Пароль"}
                onChange={type === "register" ? (e => setPassword(e.target.value)) : undefined}
                value={type === "register" ? password : undefined}
                aria-autocomplete={"list"}
            />
            {type === "register" && <div className={"w-full"}>
                {validation_password_component}
            </div>}
            {type == "register" && <>
                <input
                    className={"login-card__input"}
                    name={"password_repeat"}
                    type={"password"}
                    autoComplete={"new-password"}
                    placeholder={"Повторите пароль"}
                    onChange={type === "register" ? (e => setRepeatPassword(e.target.value)) : undefined}
                    value={type === "register" ? repeatPassword : undefined}
                    aria-autocomplete={"list"}
                />
            </>}
            <button className={"login-card__button"} type={"submit"} disabled={!validation_password}>{type == "login" ? "Войти" : "Зарегистрироваться"}</button>
        </Form>
            <hr/>
            <span>
            {type == "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}&nbsp;
                <Link href={type === "login" ? "/register" : "/login"} className={"accent underline"}>
                    {type == "login" ? "Зарегистрироваться" : "Войти"}
                </Link>
        </span>
    </div>
}
