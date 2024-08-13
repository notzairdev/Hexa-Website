import { subtitle, title } from "@/components/primitives";
import { useTranslations } from 'next-intl';

export default function NotFound() {
    
    const t = useTranslations('Notfound');

    return (
        <section>
            <div className="h-screen w-full flex items-center justify-center text-center flex-col gap-3 bg-gradient-bg-2">
                <h1 className={title({ size: 'sm', color: 'red' })}>404: {t('not_found_title')}</h1>
                <p className="text-default-400 text-sm">{t('not_found_desc')}</p>
            </div>
        </section>
    );
}