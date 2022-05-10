import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

export const GitHubBornOn = () => {
    
    const [gitHubInfo, updateGitHubInfo] = useState({username: "", bornOnDate: ""});

    const fetchBornOn = async () => {
        const data = await API.get('cryptoapi', `/born`);
        updateGitHubInfo({
            username: data.bornOnInfo.login,
            bornOnDate: data.bornOnInfo.created_at
        });
        console.log("github response: ");
        console.log(data);
        console.log(gitHubInfo);
    }

    useEffect(() => {
        console.log("Fetching github data.");
        fetchBornOn();
    }, []);

    return (
        <h6>
            {gitHubInfo.username} - {gitHubInfo.bornOnDate}
        </h6>
    )
};
