import {Button, Stack, Text, Title} from "@mantine/core";
import Link from "next/link";

export default function AuthVerifyEmailPage() {
    return (
        <>
            <Stack>
                <Title order={2}>{"Vérifiez votre adresse e-mail"}</Title>
                <Text size={"sm"}>
                    {"Consultez la boîte de réception de "}
                    <b>{"seknazi.beatrice@gmail.com"}</b>
                    {" pour vérifier votre compte et démarrer."}
                </Text>
                <Button type={"submit"}>{"Renvoyer l'e-mail"}</Button>
                <Text ta={"center"} size={"sm"}>
                    <Link href={"/auth/logout"}>{"Déconnexion"}</Link>
                </Text>
            </Stack>
        </>
    )
}