import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';


type Props = {
    params: {locale: string};
  };
  
export default function About({params: {locale}}: Props){
    unstable_setRequestLocale(locale);
    
    const t = useTranslations('about')
    return <h1 className='pt-28'>{t('example1')}</h1>
}