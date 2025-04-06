import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    subsets: ["cyrillic", "latin"]
})

export const metadata: Metadata = {
    title: "FlexCode | Learning programming is easy",
    description: "", // TODO: add description to metadata
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en">
        <body className={`${inter.className} antialiased`}>
            {children}
        </body>
    </html>
}
