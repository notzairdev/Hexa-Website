"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown"
import { useLocale } from "next-intl"
import { Button } from "@nextui-org/button"
import { Languages } from "@/config/langs"
import { usePathname, useRouter } from "next/navigation"
import { FranceFlag, MexicoFlag, PortugalFlag, USAFlag } from "./flags"
import { TranslateIcon } from "./icons"

const LocaleSwitcher = () => {

    const router = useRouter()
    const path = usePathname()
    const localeUse = useLocale()

    const handleLocaleChange = (locale: any) => {
        let langs: string[] = []

        Languages.map((lang) => {
            langs.push(lang.locale)
        });

        router.replace(`${path.replace(localeUse, locale) }`)
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="flat"
                    color="danger"
                    className="rounded-full"
                    isIconOnly
                >
                    <TranslateIcon />
                    {/* {commonT('langs')} */}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                onAction={(key) => handleLocaleChange(key)}
            >
                {
                    Languages.map((lang) => (
                        <DropdownItem key={lang.locale} startContent={lang.flagKey === 'mx' ? <MexicoFlag /> : lang.flagKey === 'us' ? <USAFlag /> : lang.flagKey === 'fr' ? <FranceFlag /> : lang.flagKey === 'pt' ? <PortugalFlag /> : null}>
                            {lang.name}
                        </DropdownItem>
                    ))
                }
                
            </DropdownMenu>
        </Dropdown>
    )
}

export default LocaleSwitcher;