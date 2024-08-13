import { NextTeamCard } from "@/components/cards";
import { title } from "@/components/primitives";
import { TeamMembers } from "@/config/team";
import { useTranslations } from "next-intl";

export default function BlogPage() {

  const t = useTranslations("Team");

  return (
    <section>
      <div className="flex flex-col items-center">
        <div>
          <h1 className={title({ size: 'lg' })}>{t('title_a')}&nbsp;</h1>
          <h1 className={title({ size: 'lg', color: 'red' })}>{t('title_b')}&nbsp;</h1>
        </div>
        <hr className="mt-4 opacity-30 w-52" />
      </div>

      <div className="grid md:grid-cols-2 py-8 px-8 gap-6">
        {
          TeamMembers.map((member, index) => (
            <NextTeamCard
              titleCard={member.name}
              subtitleCard={member.subtitle}
              image={member.image}
              data={member.socialLinks}
            />
          ))
        }
      </div>

    </section>
  );
}
