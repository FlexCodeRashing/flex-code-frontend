"use server"

import AppLayout from "@/modules/AppLayout/module"
import AuthCard from "@/modules/AuthCard/module"
import React from "react";

export default async function Page() {
    return <AppLayout classes={"flex-align"}>
        <AuthCard type={"register"} />
    </AppLayout>
}
