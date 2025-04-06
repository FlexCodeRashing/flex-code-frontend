"use server"

import AppLayout from "@/modules/AppLayout/module"
import AuthCard from "@/modules/AuthCard/module"

export default async function Page() {
    return <AppLayout classes={"flex-align"}>
        <AuthCard />
    </AppLayout>
}
