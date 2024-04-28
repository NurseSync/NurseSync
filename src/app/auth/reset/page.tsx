import {Button, Stack, Text, TextInput, Title} from "@mantine/core";
import Link from "next/link";

export default function AuthResetPage() {
    return (
        <>
            <Stack>
                <Title order={2}>{"Réinitialisation du mot de passe"}</Title>
                <Text size={"sm"}>
                    {"Saisissez l'adresse e-mail associée à votre compte et nous vous enverrons un lien pour réinitialiser votre mot de passe."}
                </Text>
                <TextInput label={"Adresse e-mail"} placeholder={"edouard.aubert@exemple.com"}/>
                <Button type={"submit"}>{"Continuer"}</Button>
                <Text ta={"center"} size={"sm"}>
                    <Link href={"/auth/login"}>{"Revenir à la page de connexion"}</Link>
                </Text>
            </Stack>
        </>
    )
}