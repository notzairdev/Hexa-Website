'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  DiscordIcon,
  InstagramIcon,
  Logo,
  TikTokIcon
} from "@/components/icons";
import { Tooltip } from "@nextui-org/tooltip";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

export const Navbar = () => {

  const t = useTranslations('Navbar');
  const locale = useLocale()

  const buildLink = (page: string) => {
    return `/${locale}${page}`;
  };

  return (
    <NextUINavbar className="fixed select-none" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href={"/" + locale}>
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-5 justify-start ml-5">
          {siteConfig.navItems.map((item) => (
            item.href !== "/" && (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={buildLink(item.href)}
                >
                  <p className="text-ssm font-medium">{t(item.label)}</p>
                </NextLink>
              </NavbarItem>
            )
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
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
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <LocaleSwitcher/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            item.href !== "/" + locale && (
              <NavbarMenuItem key={`${item}-${index}`}>
                <p className="text-ssm font-medium">{t(item.label)}</p>
              </NavbarMenuItem>
            )
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
