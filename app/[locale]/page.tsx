"use client";

import { NextCard, NextCardCollab } from "@/components/cards";
import { title, subtitle } from "@/components/primitives";
import { Collaborators } from "@/config/collaborators";
import { events } from "@/config/events_show";
import { useTranslations } from 'next-intl';
import { Card, CardBody } from "@nextui-org/card";

export default function Home() {
  const t = useTranslations('Home');
  const eventT = useTranslations('Events');
  const collabsT = useTranslations('Collabs');
  const commonT = useTranslations('Common');

  return (
    <>
    
    <section>
      <div className="w-full h-screen bg-gradient-bg-3 bg-cover bg-bottom select-none">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title({ size: 'lg' })}>{t('title')}&nbsp;</h1>
            <h1 className={title({ size: 'lg', color: 'red' })}>Hexa&nbsp;</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              {t('subtitle')}
            </h2>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div className="w-full h-144 select-none">
        <div className="grid md:grid-cols-2 md:mt-0 mt-5 h-full md:px-14 px-4 gap-4">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className={title({ size: 'lg' })}>{t('sector_b_title')}&nbsp;</h1>
              <h1 className={title({ size: 'lg', color: 'red' })}>ideas&nbsp;</h1>
              <h1 className={title({ size: 'lg' })}>{t('sector_b_title_2')}</h1>
            </div>
            <br />
            <h2 className={subtitle({ class: "mt-4 text-justify" })}>
              {t('sector_b_sub')}
            </h2>
          </div>
          <div className="flex items-center justify-center">
            render
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="w-full select-none mt-16 md:mt-0 md:px-8 px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className={title({ size: 'lg' })}>{t('sector_c_title')}&nbsp;</h1>
            <h1 className={title({ size: 'lg', color: 'red' })}>{t('sector_c_title_2')}&nbsp;</h1>
          </div>
          <hr className="mt-4 opacity-30 w-52" />
        </div>

        <div className="flex flex-col py-8 px-8 gap-6">
          {
            events.slice(0, 5).map((event, index) => (
              <NextCard
                key={index}
                image={event.image}
                titleCard={event.title}
                subtitleCard={eventT(event.langKey + '_low')}
                href="/ext"
              /> 
            ))
          }
          <Card>
            <CardBody className="text-center">
              <p>
                {commonT('more')}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>

    <section>
      <div className="w-full select-none mt-12 md:py-8 md:px-8 px-4 bg-gradient-bg mb-5 shadow-inner">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className={title({ size: 'lg' })}>{t('sector_d_title')}&nbsp;</h1>
            <h1 className={title({ size: 'lg', color: 'red' })}>{t('sector_d_title_2')}&nbsp;</h1>
          </div>
          <hr className="mt-4 opacity-30 w-52" />
        </div>

        <div className="grid md:grid-cols-3 py-8 px-8 gap-6">
          {
            Collaborators.map((event, index) => (
              <NextCardCollab
                key={index}
                image={event.image}
                titleCard={event.name}
                social_links={event.social_links}
                subtitleCard={collabsT(event.descriptionKey)}
              />
            ))
          }
        </div>
      </div>
    </section>
    
    </>
    
  );
}
