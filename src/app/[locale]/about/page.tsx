import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout from "@/components/PageLayout";

type Props = {
  params: { locale: string };
};

export default function About({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("about");
  return (
    <PageLayout title={t("example1")}>
      <div>{t("example2")}</div>
    </PageLayout>
  );
}
