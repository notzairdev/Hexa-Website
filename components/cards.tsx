"use client"

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { Link } from "@nextui-org/link";
import { InstagramIcon, TwitchIcon, TwitterIcon, YouTubeIcon } from "./icons";
import { useFormatter, useTranslations } from 'next-intl';
import { AssetsIcon, CalendarIcon, ClockIcon, PersonGroupIcon } from "./commonIcons";
import { title } from "./primitives";

export const NextCard = ({
    titleCard,
    subtitleCard,
    image,
    href
}: {
    titleCard: string;
    subtitleCard: string;
    image: string;
    href: string;
}) => {
    const t = useTranslations('Common');

    return (
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <div className="relative w-full h-full md:flex md:items-center">
                <video autoPlay muted loop id="video">
                    <source src={image} type="video/mp4" />
                </video>
            </div>
            <CardFooter className="absolute md:bg-black/40 bottom-0 z-10">
                <div className="flex flex-grow items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-4xl">{titleCard}</h1>
                        <p className="opacity-75 text-small font-semibold">
                            {subtitleCard}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block pl-4">
                    <Button radius="md" size="lg" color="danger" className="font-semibold" href={href}>
                        {t('btn_linked')}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
};

export const NextCardHover = ({
    titleCard,
    subtitleCard,
    image,
    data
}: {
    titleCard: string;
    subtitleCard: string;
    image: string;
    data: any
}) => {
    const t = useTranslations('Common');
    const format = useFormatter();

    return (
        <Card isBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 select-none">
            <div className="relative w-full h-full md:flex md:items-center">
                <video autoPlay muted loop id="video">
                    <source src={image} type="video/mp4" />
                </video>
            </div>
            <CardBody className="absolute md:bg-black/40 backdrop-blur-sm top-0 h-full z-10 p-0">
                <div className="grid md:grid-cols-2 w-full h-full">
                    <div className="flex flex-col gap-2 p-5 bg-black/45 md:bg-transparent md:justify-center items-center">
                        <h1 className="font-semibold text-5xl">{titleCard}</h1>
                        <p className="opacity-75 text-small font-semibold text-justify">
                            {subtitleCard}
                        </p>
                    </div>
                    <div className="justify-end hidden md:flex">
                        <div className="flex flex-col w-3/4 rounded-xl justify-center backdrop-blur-md bg-black/40 h-full p-8 gap-5">
                            <h1 className="font-semibold text-5xl">{t('cards_title')}</h1>
                            <div>
                                <div className="grid grid-cols-2">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon size={16} />
                                        <p className="font-medium">{t('date')}:</p>
                                        <p className="text-default-500">
                                            {
                                                format.dateTime(new Date(data.date), {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })
                                            }
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon size={18} />
                                        <p className="font-medium">{data.playedtime}</p>
                                        <p className="text-default-500">{t('playedtime')}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <PersonGroupIcon size={16} />
                                        <p className="font-medium">{data.players}</p>
                                        <p className="text-default-500">{t('players')}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AssetsIcon size={18} />
                                        <p className="font-medium">{data.assets}</p>
                                        <p className="text-default-500">{t('assets')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
};

export const NextCardCollab = ({
    titleCard,
    subtitleCard,
    image,
    social_links,
}: {
    titleCard: string;
    subtitleCard: string;
    image: string;
    social_links: {
        instagram?: string;
        twitter?: string;
        youtube?: string;
        twitch?: string;
        website?: string;
    };
}) => {

    const t = useTranslations('Common');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => setIsLoading(false);
    }, [image]);

    return (
        <Card isBlurred className="py-4 px-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-start">
                <div className="flex w-full items-center">
                    <h1 className="font-semibold text-2xl">{titleCard}</h1>
                    <div className="hidden md:flex w-full justify-end gap-2">
                        {social_links.instagram && (
                            <Button
                                href={social_links.instagram}
                                as={Link}
                                color="danger"
                                className="rounded-full"
                                variant="flat"
                                isExternal={true}
                                isIconOnly
                            >
                                <InstagramIcon />
                            </Button>
                        )}
                        {social_links.twitter && (
                            <Button
                                href={social_links.twitter}
                                as={Link}
                                color="danger"
                                className="rounded-full"
                                variant="flat"
                                isExternal={true}
                                isIconOnly
                            >
                                <TwitterIcon />
                            </Button>
                        )}
                        {social_links.twitch && (
                            <Button
                                href={social_links.twitch}
                                as={Link}
                                color="danger"
                                className="rounded-full"
                                variant="flat"
                                isExternal={true}
                                isIconOnly
                            >
                                <TwitchIcon />
                            </Button>
                        )}
                        {social_links.youtube && (
                            <Button
                                href={social_links.youtube}
                                as={Link}
                                color="danger"
                                className="rounded-full"
                                variant="flat"
                                isExternal={true}
                                isIconOnly
                            >
                                <YouTubeIcon />
                            </Button>
                        )}
                    </div>
                </div>
                <small className="text-default-500 mt-3">{subtitleCard}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-4">
                <div className="relative w-full h-full">
                    {isLoading && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Spinner color="danger" />
                        </div>
                    )}
                    {!isLoading && (
                        <Image
                            isBlurred
                            alt={titleCard + " Image"}
                            className="z-0 w-full h-full object-cover"
                            src={image}
                        />
                    )}
                </div>
            </CardBody>
        </Card>
    )
}

export const NextTeamCard = ({
    titleCard,
    subtitleCard,
    image,
    data
}: {
    titleCard: string;
    subtitleCard: string;
    image: string;
    data: any;
}) => {
    const t = useTranslations('Common');
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => setIsLoading(false);
    }, [image]);

    return (
        <Card
            isBlurred
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        {isLoading && (
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Spinner color="danger" />
                            </div>
                        )}
                        {!isLoading && (    
                            <Image
                                alt="Pic Profile"
                                className="object-cover"
                                height={200}
                                shadow="none"
                                src={image}
                                style={{ maskImage: 'linear-gradient(black 70%, transparent)'}}
                                width="100%"
                            />
                        )}
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex flex-col gap-2">
                            <h1 className={title({ size: 'sm' })}>{titleCard}</h1>
                            <p className="text-small text-default-500">{subtitleCard}</p>
                        </div>

                        <div className="hidden md:flex w-full mt-3 gap-2">
                            {data.instagram && (
                                <Button
                                    href={data.instagram}
                                    as={Link}
                                    color="danger"
                                    className="rounded-full"
                                    variant="flat"
                                    isExternal={true}
                                    isIconOnly
                                >
                                    <InstagramIcon />
                                </Button>
                            )}
                            {data.x && (
                                <Button
                                    href={data.x}
                                    as={Link}
                                    color="danger"
                                    className="rounded-full"
                                    variant="flat"
                                    isExternal={true}
                                    isIconOnly
                                >
                                    <TwitterIcon />
                                </Button>
                            )}
                            {data.twitch && (
                                <Button
                                    href={data.twitch}
                                    as={Link}
                                    color="danger"
                                    className="rounded-full"
                                    variant="flat"
                                    isExternal={true}
                                    isIconOnly
                                >
                                    <TwitchIcon />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
};