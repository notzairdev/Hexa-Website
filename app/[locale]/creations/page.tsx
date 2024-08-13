import { NextCardHover } from "@/components/cards";
import { title } from "@/components/primitives";
import { events } from "@/config/events_show";
import { useTranslations } from "next-intl";

export default function CreationsPage() {
  const homeT = useTranslations("Home");
  const eventT = useTranslations("Events");

  return (
    <section>
      <div className="flex flex-col items-center">
        <div>
          <h1 className={title({ size: 'lg' })}>{homeT('sector_c_title')}&nbsp;</h1>
          <h1 className={title({ size: 'lg', color: 'red' })}>{homeT('sector_c_title_2')}&nbsp;</h1>
        </div>
        <hr className="mt-4 opacity-30 w-52" />
      </div>

      <div className="grid md:grid-cols-3 py-8 px-8 gap-6">
        {
          events.map((event, index) => (
            <NextCardHover
              key={index}
              data={event.data}
              image={event.image}
              titleCard={event.title}
              subtitleCard={eventT(event.langKey + '_high')}
            /> 
          ))
        }
      </div>
    </section>
  );
}
