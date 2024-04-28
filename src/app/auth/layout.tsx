import {Card, Center, Flex, Stack, Text} from "@mantine/core";
import styles from "@/styles/auth/layout.module.css"
import Link from "next/link";
import LogoNurseSync from "@/components/LogoNurseSync";

export default function AuthLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Stack className={styles.container}>
                <Card padding={"xl"} className={styles.card}>
                    {children}
                </Card>
                <Flex justify={"space-around"} className={styles.legal} pb={"md"}>
                    <Text size={"sm"}>
                        <Link href={"/legal/terms"}>{"Conditions d'utilisation"}</Link>
                    </Text>
                    <Text size={"sm"}>
                        <Link href={"/legal/privacy"}>{"Politique de confidentialité"}</Link>
                    </Text>
                </Flex>
                <Center>
                    <LogoNurseSync type={"logo"} width={120} color={"#828282"}/>
                </Center>
            </Stack>
        </>
    )
}