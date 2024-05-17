import {useTranslations} from 'next-intl'

export default function About(){
    const t = useTranslations('about')
    return <h1 className='pt-28'>{t('example1')}</h1>
}