import {Button, Group, PasswordInput, Stack, Text, TextInput, Title} from "@mantine/core";
import Link from "next/link";

export default function AuthRegisterPage() {
    return (
        <>
            <Stack>
                <Title order={2}>{"Créez votre compte NurseSync"}</Title>
                <Group grow>
                    <TextInput label={"Prénom"} placeholder={"Edouard"}/>
                    <TextInput label={"Nom"} placeholder={"Aubert"}/>
                </Group>
                <TextInput label={"Adresse e-mail"} placeholder={"edouard.aubert@exemple.com"}/>
                <PasswordInput label={"Mot de passe"} placeholder={"••••••••••••"}/>
                <Button type={"submit"}>{"Créer un compte"}</Button>
                <Text ta={"center"} size={"sm"}>
                    {"Vous avez un compte ? "} <Link href={"/auth/login"}>{"Connexion"}</Link>
                </Text>
            </Stack>
        </>
    )
}