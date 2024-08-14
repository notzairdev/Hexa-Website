import { Input, Textarea } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { MailIcon, MessageIcon, PersonIcon } from "@/components/commonIcons";

export default function ContactPage() {

  const t = useTranslations("Contact");

  return (
    <section>
      <div className="flex flex-col items-center">
        <div>
          <h1 className={title({ size: 'lg' })}>{t('title')}&nbsp;</h1>
        </div>
        <hr className="mt-4 opacity-30 w-52" />
        <div className="grid md:grid-cols-2 py-8 px-8 gap-6 w-full">
          <div>
            <form className="flex flex-col gap-3">
              <Input
                label={t('form_a')}
                placeholder={t('form_a_a')}
                type="text"
                startContent={
                  <MailIcon className="text-default-500" size={24} />
                }
                labelPlacement="outside"
                isClearable
                isRequired
              />
              <Input
                label={t('form_b')}
                placeholder={t('form_b_a')}
                type="email"
                startContent={
                  <PersonIcon className="text-default-500" size={26} />
                }
                labelPlacement="outside"
                isClearable
                isRequired
              />
              <Textarea
                label={t('form_c')}
                placeholder={t('form_c_a')}
                className="scroll-smooth"
                maxRows={6}
                startContent={
                  <MessageIcon className="text-default-500" size={26} />
                }
                isRequired
              />
              <Button color="danger">{t('form_d')}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
