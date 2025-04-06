"use server"

import React from "react";
import Header from "@/modules/Header/module"
import "./module.css"

interface ModuleProps {
    children?: React.ReactNode,
    classes?: string
}

export default async function Module({ children, classes }: ModuleProps) {
    const fallback: React.ReactNode = <></>
    return <>
        <Header />
        <main className={`page-main ${classes}`}>
            {children ? children : fallback}
        </main>
    </>
}
