import { useTranslations } from "next-intl";

export default function Footer(){
    const t = useTranslations( 'Home' )

    return(
        <footer className="bg-slate-200 p-5 fixed bottom-0 left-0 w-full">
            <p className="text-center text-1xl font-bold">
                {t( 'footer')}
            </p>
        </footer>
    )
}