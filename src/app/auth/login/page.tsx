import {Button, PasswordInput, Stack, Text, TextInput, Title} from "@mantine/core";
import Link from "next/link";

export default function AuthLoginPage() {
    return (
        <>
            <Stack>
                <Title order={2}>{"Connectez-vous à votre compte"}</Title>
                <TextInput label={"Adresse e-mail"} placeholder={"edouard.aubert@exemple.com"}/>
                <PasswordInput label={"Mot de passe"} placeholder={"••••••••••••"}/>
                <Text ta={"right"} size={"sm"}>
                    <Link href={"/auth/reset"}>{"Mot de passe oublié ?"}</Link>
                </Text>
                <Button type={"submit"}>{"Continuer"}</Button>
                <Text ta={"center"} size={"sm"}>
                    {"Vous n'avez pas de compte ? "} <Link href={"/auth/register"}>{"S'inscrire"}</Link>
                </Text>
            </Stack>
        </>
    )
}