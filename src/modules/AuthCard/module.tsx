"use client"

import React from "react";
import "./module.css"
import Form from "next/form";

interface ModuleProps {
    type?: "login" | "register"
}

export default function Module({ type = "login" }: ModuleProps) {
    function submit_login(formData: FormData) {

        alert(`${formData.get("email")}\n${formData.get("password")}`);
    }
    return <div className={"login-card flex-align"}>
        <Form action={submit_login} className={"login-card__form flex-align flex-col gap-4 justify-start"}>
            <input className={"login-card__input"} name={"email"} type={"email"} placeholder={"Email"}/>
            <input className={"login-card__input"} name={"password"} type={"password"} placeholder={"Password"}/>
            <button className={"login-card__button"} type={"submit"}>Login</button>
        </Form>
    </div>
}
