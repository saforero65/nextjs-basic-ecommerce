import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    keywords: string;
}

export default function LayoutLogin({ children,title, description, keywords }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/next.svg" type="image/x-icon" />
            </Head>
            <main className="flex items-center justify-center h-screen w-full bg-gray-50">
                {children}
            </main>
        </div>
    )
}