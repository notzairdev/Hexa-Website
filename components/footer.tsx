import { siteConfig } from "@/config/site"
import { Tooltip } from "@nextui-org/tooltip"
import { Link } from "@nextui-org/link";
import { TikTokIcon, InstagramIcon, TwitterIcon, DiscordIcon, Logo_XL } from "./icons"
import { useTranslations } from "next-intl";

export const Footer = () => {

    const t = useTranslations('Footer');

    return (
        <footer className="flex flex-col bg-zinc-950 font-sans select-none">
            <div className="grid">
                <div className="grid md:grid-cols-2 gap-4 px-6">
                    <div className="hidden md:block">
                        <Logo_XL/>
                    </div>
                    <div className="grid md:grid-cols-3 text-center md:text-left md:gap-3 gap-5 mt-10">
                        <div className="flex flex-col gap-5">
                            <p className="font-medium text-xl text-hexa-color">{t('title_a')}</p>
                            <ul className="list-none opacity-50">
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_aa')}
                                    </Link>
                                </li>
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_ab')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-medium text-xl text-hexa-color">{t('title_b')}</p>
                            <ul className="list-none opacity-50">
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_ba')}
                                    </Link>
                                </li>
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_bb')}
                                    </Link>
                                </li>
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_bc')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-medium text-xl text-hexa-color">{t('title_c')}</p>
                            <ul className="list-none opacity-50">
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_ca')}
                                    </Link>
                                </li>
                                <li>
                                    <Link isExternal className="text-current" href="">
                                        {t('sub_cb')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 p-5 mt-5">
                    <div className="hidden md:block">
                        <p className="text-default-500">
                            © {new Date().getFullYear()} {siteConfig.name}. {t('rights')}.
                        </p>
                    </div>
                    <div className="flex md:justify-end justify-center">
                        <div className="flex items-center gap-3">
                            <Tooltip content="TikTok">
                                <Link isExternal aria-label="TikTok" href={siteConfig.links.tiktok}>
                                    <TikTokIcon className="text-default-500" />
                                </Link>
                            </Tooltip>
                            <Tooltip content="Instagram">
                                <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
                                    <InstagramIcon className="text-default-500" />
                                </Link>
                            </Tooltip>
                            <Tooltip content="X (Twitter)">
                                <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                                    <TwitterIcon className="text-default-500" />
                                </Link>
                            </Tooltip>
                            <Tooltip content="Discord Server">
                                <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                                    <DiscordIcon className="text-default-500" />
                                </Link>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}