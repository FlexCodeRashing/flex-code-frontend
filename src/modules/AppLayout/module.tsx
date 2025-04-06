"use server"

import React from "react";
import Header from "@/modules/Header/module"
import "./module.css"

interface ModuleProps {
    children?: React.ReactNode
}

export default async function Module({ children }: ModuleProps) {
    const fallback: React.ReactNode = <></>
    return <>
        <Header />
        <main className={"page-main"}>
            {children ? children : fallback}
        </main>
    </>
}
