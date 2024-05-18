import React from 'react'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
    params: {locale: string};
  };

const Contact = ({params: {locale}}: Props) => {
 // Enable static rendering
 unstable_setRequestLocale(locale);

 const t = useTranslations('Contact');

 return (
   <PageLayout title={t('texto1')}>
    <div>{t('texto2')}</div>
   </PageLayout>
 );
}

export default Contact