import { useEffect, useState } from "react";
import queryString from "query-string";
import { ROUTE_URL } from "@/src/constant/url";
import { useRouter } from "next/router";
const Loginmiddleware = () => {
const router = useRouter();

    useEffect(() => {
        const authorizationCode = queryString.parse(window.location.search).code;
        const payload = {
            grant_type: "authorization_code",
            code: authorizationCode,
            redirect_uri: "http://master.revel-yax.test:3000/loginmiddleware",
            client_id: "master",
        };
        const encodedPayload = new URLSearchParams(payload).toString();
        fetch("http://master.revel-dev.test:8051/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": " Basic bWFzdGVyOnNlY3JldA==",
            },
            body: encodedPayload,
        }).then(resp => resp.json())
            .then(json => localStorage.setItem("token", JSON.stringify(json.access_token)))
        router.push(ROUTE_URL.TENANTS)
    }, []);
    return (<>
    </>)
}
export default Loginmiddleware;