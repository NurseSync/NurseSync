import {Button, Center, PinInput, Stack, Text, Title} from "@mantine/core";
import Link from "next/link";

export default function Auth2faPage() {
    return (
        <>
            <Stack>
                <Title order={2}>{"Nous vous avons envoyé un e-mail"}</Title>
                <Text size={"sm"}>
                    {"Pour continuer, saisissez le code de vérification à 6 chiffres envoyé à votre adresse e-mail."}
                </Text>
                <Center>
                    <PinInput length={6}/>
                </Center>
                <Button type={"submit"}>{"Renvoyer le code"}</Button>
                <Text ta={"center"} size={"sm"}>
                    <Link href={"/auth/logout"}>{"Déconnexion"}</Link>
                </Text>
            </Stack>
        </>
    )
}