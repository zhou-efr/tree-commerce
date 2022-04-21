import React, {FC, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {API_URL} from "../../../Constants/Constants";
import {Footer} from "../../../Component";
import "./SignIn.scss";
import { Loading } from "../../../App";

interface LoginProps {
    onLogin: (user: any) => void;
}

export const Login:FC<LoginProps> = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const IncludeCredentialString:RequestCredentials = 'include';

    const loadUser = async () => {
        setLoading(true);
        const url = `${API_URL}/user`;
        const options = {
            method: 'GET',
            credentials: IncludeCredentialString,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const user_response = await fetch(url, options).catch(err => {throw err;});
        const user = await user_response?.json();
        if (!user) {
            alert('Registration failed');
            throw new Error('User not found');
        }
        props.onLogin(user);
        setLoading(false);
    };
    const registerUser = async () => {
        if (username === '' || password === '' || email === '') {
            alert('Please fill in all fields');
            throw new Error('Please fill in all fields');
        }
        setLoading(true);

        const url = `${API_URL}/register`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: IncludeCredentialString,
            body: JSON.stringify({
                username,
                password,
                email,
            })
        };

        await fetch(url, options).catch(err => {throw err;});
        await loadUser().catch(err => {throw err;});
        setLoading(false);
        navigate('/');
    };
    const loginUser = async () => {
        setLoading(true);

        let url = `${API_URL}/login`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: IncludeCredentialString,
            body: JSON.stringify({
                username,
                password
            })
        };

        await fetch(url, options).catch(err => {throw err;});
        await loadUser().catch(err => {throw err;});
        setLoading(false);
        navigate('/');
    };

    const handleLoginSubmit = () => {
        loginUser().catch(err =>  { setLoading(false); throw err; });
    };
    const handleRegisterSubmit = () => {
        console.log('register');
        registerUser().catch(err =>  { setLoading(false); throw err; });
    };

    return (
        <div className={"SignInPage overflow-hidden h-screen"}>
            <NavLink id={"HeaderSI"} to={"/"}>
                <svg width="223" height="72" viewBox="0 0 223 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M101.886 3.12233C96.543 1.85325 90.1472 0.981744 82.6983 0.507813C81.7115 0.418593 80.6362 0.355847 79.4725 0.319575C78.3694 0.226725 77.1777 0.160351 75.8977 0.120452C74.1522 0.0660445 72.3474 0.0390192 70.4832 0.0393763C68.6796 -0.0168448 66.9318 -0.0128619 65.2399 0.051325C63.5503 0.0571202 61.9177 0.0939262 60.3422 0.161743C58.8272 0.172979 57.5158 0.190564 56.408 0.214497C52.2633 0.436078 48.8191 0.621031 46.0753 0.769354C43.3897 0.919494 40.9358 1.10608 38.7134 1.32912C36.5515 1.49558 34.4454 1.72224 32.3953 2.00911C30.3475 2.23759 27.918 2.54187 25.107 2.92194C17.5534 3.9142 11.6848 5.01744 7.50122 6.23166C3.31996 7.38749 0.913278 8.59864 0.281188 9.8651C0.0278959 10.3834 -0.0542736 10.9947 0.0346801 11.699C0.184101 12.3467 0.482407 12.9114 0.929598 13.393C1.26271 13.8126 1.91125 14.359 2.87524 15.0322C3.84151 15.6469 5.03709 16.3565 6.46197 17.1609C7.88686 17.9653 9.48515 18.8044 11.2568 19.6781C13.0285 20.5518 14.8584 21.4273 16.7465 22.3046C19.6659 23.6233 22.1802 24.8709 24.2896 26.0474C26.4572 27.2258 28.5329 28.5182 30.5168 29.9246C31.5367 30.658 32.4425 31.3293 33.2342 31.9386C34.0259 32.5479 34.7303 33.1544 35.3475 33.7583C35.967 34.3038 36.555 34.9067 37.1118 35.5672C37.6707 36.1692 38.2263 36.8588 38.7784 37.636C40.1086 39.3729 41.2864 41.2804 42.312 43.3585C43.3957 45.4385 44.1651 47.3625 44.6202 49.1305C44.7628 49.9534 44.8774 50.7463 44.9641 51.509C45.0484 52.3301 45.0712 53.2369 45.0324 54.2296C44.9935 55.2222 44.8908 56.359 44.7242 57.64C44.5576 58.921 44.2934 60.462 43.9317 62.263C43.7228 63.1334 43.599 64.065 43.5602 65.0576C43.5191 66.1087 43.5105 67.073 43.5344 67.9507C43.6165 68.8302 43.7334 69.5646 43.8851 70.1539C44.0345 70.8017 44.1942 71.1867 44.3642 71.3089C44.5319 71.4895 44.9437 71.3854 45.5998 70.9966C45.7184 70.9419 45.8182 70.6234 45.8993 70.0413C46.0362 69.5194 46.1475 68.9091 46.233 68.2102C46.4911 64.5936 46.688 61.7935 46.8238 59.8101C46.9574 57.885 46.9854 56.4243 46.9079 55.428C46.8166 54.7821 46.7847 54.1088 46.8121 53.4081C46.8955 52.7676 46.9463 52.2138 46.9645 51.7467C47.0456 51.1646 47.2612 50.119 47.6115 48.6099C48.02 47.1026 48.4297 45.5662 48.8404 44.0005C49.3117 42.3783 49.747 40.9303 50.1463 39.6566C50.5457 38.3828 50.8047 37.7186 50.9234 37.6638L50.8361 37.6611L51.8356 34.4476C52.1562 33.6976 52.4512 32.8591 52.7205 31.9321C52.9897 31.0051 53.2487 30.3409 53.4975 29.9394L54.9676 25.8636C55.6853 23.8983 56.7099 21.5333 58.0414 18.7686C59.3729 16.004 60.879 13.2447 62.5596 10.4909C63.0171 9.21904 62.6663 8.50656 61.5072 8.3535C61.2186 8.28605 60.9533 8.36547 60.7115 8.59178C60.4719 8.7597 60.1941 9.16027 59.878 9.7935C59.5643 10.3683 59.182 11.2041 58.7314 12.3009C58.2807 13.3976 57.7301 14.8127 57.0798 16.5463C56.6291 17.6431 56.2377 18.7124 55.9057 19.7544C55.6341 20.7398 55.3369 21.6367 55.014 22.4451L54.2438 24.2626C53.6677 25.5893 52.9882 27.322 52.2055 29.4607C51.4809 31.6012 50.7541 33.8001 50.025 36.0574C49.2982 38.2563 48.6353 40.311 48.0362 42.2216C47.4954 44.134 47.1217 45.4962 46.9151 46.3082C46.7462 47.6476 46.5477 48.2552 46.3195 48.1312C46.0891 48.0655 45.6847 47.2345 45.1064 45.638C44.9524 45.107 44.6307 44.3954 44.1413 43.5033C43.6519 42.6111 43.0775 41.6578 42.4182 40.6434C41.817 39.6308 41.1856 38.6465 40.5239 37.6905C39.8646 36.676 39.2565 35.8386 38.6998 35.1782C37.0833 33.3155 34.7709 31.3726 31.7626 29.3496C28.8147 27.27 25.37 25.2334 21.4285 23.2398C19.0864 22.056 17.1145 21.0883 15.5128 20.3369C13.9715 19.5288 12.6584 18.8448 11.5735 18.2848C10.5468 17.7267 9.66205 17.2606 8.91938 16.8867C8.17898 16.4544 7.46769 16.023 6.78548 15.5925C5.25336 14.5509 4.14963 13.7272 3.47428 13.1216C2.8012 12.4575 2.41562 11.8901 2.31753 11.4194C2.2662 11.2424 2.36376 10.9823 2.6102 10.6392C2.91482 10.298 3.30557 9.9886 3.78246 9.71116C4.80356 8.92452 6.93242 8.11394 10.1691 7.27944C13.4661 6.38836 17.5755 5.58106 22.4972 4.85753C24.7241 4.51771 26.7161 4.22903 28.473 3.99149C30.2322 3.69555 32.0182 3.45891 33.831 3.28157C35.6461 3.04583 37.6055 2.84383 39.7093 2.67556C41.8153 2.44889 44.3577 2.23583 47.3365 2.03637C52.4771 1.67044 57.1467 1.43599 61.345 1.33301C65.5456 1.17163 69.5659 1.15079 73.406 1.27049C74.1624 1.29407 74.8595 1.34502 75.4972 1.42336L77.5045 1.48593C80.5837 1.69883 83.3428 1.90176 85.7819 2.09471C88.2211 2.28767 90.4834 2.53357 92.5688 2.83242C94.6543 3.13127 96.5931 3.45479 98.3854 3.80296C98.7121 3.86474 99.0387 3.92835 99.3652 3.99377C96.077 5.22396 92.8477 6.88625 89.6772 8.98064C86.1751 11.2368 82.8356 13.9059 79.6587 16.988C76.4818 20.0701 73.619 23.3641 71.0703 26.87C68.5215 30.3759 66.3476 34.0075 64.5486 37.7647C64.4031 38.0789 64.2614 38.3925 64.1237 38.7056C63.6682 39.2744 63.1743 39.8966 62.6421 40.5722C62.0282 41.3715 61.4412 42.2302 60.881 43.1481C60.3208 44.066 59.8491 44.9575 59.4657 45.8225C59.3585 45.5853 59.3465 45.1464 59.4298 44.506C59.5131 43.8655 59.6569 43.1684 59.8611 42.4148C60.0677 41.6027 60.3033 40.7916 60.568 39.9814C60.8932 39.1146 61.215 38.3354 61.5333 37.6438C61.8425 37.1857 62.0644 36.7249 62.199 36.2614C62.3337 35.7979 62.4056 35.4494 62.4147 35.2158C62.1911 34.975 61.8757 34.8483 61.4684 34.8356C61.0634 34.7645 60.712 34.812 60.4142 34.9781C60.0514 35.3176 59.6692 36.1534 59.2676 37.4855C58.9264 38.761 58.64 40.1259 58.4083 41.5802C58.1767 43.0346 58.0648 44.4049 58.0727 45.6914C58.0225 46.976 58.1673 47.7405 58.5073 47.9849C58.7868 48.2859 59.1068 48.2959 59.4673 48.0148C59.886 47.7356 60.2534 47.2793 60.5694 46.6461C60.825 46.0695 61.1422 45.407 61.521 44.6588C61.8454 44.0645 62.1691 43.4862 62.4923 42.9237C61.8314 44.9096 61.3314 46.8738 60.9923 48.8164C60.9221 49.2239 60.851 49.6606 60.7791 50.1266L60.7432 51.3532C60.6061 56.026 61.6886 59.8214 63.9906 62.7393C66.2926 65.6571 69.2854 67.8605 72.9688 69.3494C76.7103 70.8397 80.9072 71.6977 85.5594 71.9233C90.2117 72.1489 94.8203 71.8767 99.3852 71.1067C103.948 70.395 108.233 69.2677 112.238 67.7247C116.243 66.1817 119.47 64.3867 121.917 62.3397C122.813 61.6008 122.671 61.4513 121.494 61.8914C117.993 64.0892 114.068 65.897 109.717 67.3151C105.364 68.7915 100.938 69.7986 96.4378 70.3364C91.9961 70.8755 87.6562 70.9202 83.4183 70.4704C79.2384 70.022 75.5414 69.0004 72.327 67.4056C69.1708 65.8121 66.7027 63.5917 64.9227 60.7445C63.1426 57.8973 62.4316 54.3444 62.7895 50.0859C63.0531 47.0526 63.8774 43.7694 65.2622 40.2363C65.5332 39.5449 65.8187 38.8538 66.1187 38.163L66.1451 38.1383C66.2661 38.0251 66.3476 38.1738 66.3898 38.5844C66.4514 39.9894 66.7337 40.9628 67.2368 41.5047C67.798 42.0483 68.2801 42.3849 68.6828 42.5144C69.6023 42.8353 70.5064 42.805 71.3951 42.4235C72.3421 42.0438 73.0563 41.6568 73.5377 41.2626C74.4983 40.5325 74.9205 40.1657 74.8041 40.1621C74.69 40.1 74.07 40.3146 72.9439 40.8056C71.2246 41.5705 69.9645 41.7651 69.1637 41.3893C68.421 41.0154 68.1992 39.9854 68.4981 38.2993C68.707 37.4289 68.8171 36.8477 68.8285 36.5558C68.8422 36.2054 68.7361 35.939 68.5102 35.7566C68.1189 35.3352 67.7756 35.1783 67.4801 35.286C67.4691 35.2901 67.4578 35.2945 67.4463 35.2994C68.3737 33.4182 69.4087 31.5396 70.5515 29.6635C72.7511 26.1494 75.2665 22.7888 78.0976 19.5818C80.987 16.3761 84.068 13.584 87.3407 11.2056C89.3605 9.85 91.435 8.61258 93.5643 7.49334C95.6936 6.3741 97.7879 5.45861 99.847 4.74688C100.24 4.60422 100.629 4.46851 101.014 4.33974C101.987 4.55302 102.959 4.78248 103.93 5.0281C104.968 5.29431 106.061 5.64991 107.209 6.09492C108.417 6.48335 109.536 6.89826 110.568 7.33963C111.601 7.72262 112.46 8.10017 113.145 8.47228C113.89 8.78781 114.288 9.03407 114.339 9.21106L114.493 9.74202L114.483 10.0048C114.541 10.0066 114.569 10.0367 114.567 10.0951C114.67 10.4491 114.865 10.6598 115.154 10.7272C115.445 10.7363 115.686 10.5392 115.876 10.1359C116.367 9.50809 115.958 8.7938 114.649 7.99301C113.401 7.13564 111.342 6.16529 108.472 5.08197C106.976 4.52768 105.358 4.0195 103.618 3.55742C104.375 3.35694 105.115 3.18637 105.837 3.0457C107.771 2.6233 109.524 2.43047 111.095 2.46719C113.714 2.5284 115.675 3.15876 116.98 4.35825C118.344 5.5007 118.996 7.0941 118.936 9.13847C118.895 10.5403 118.529 12.0807 117.839 13.7597C117.15 15.4386 116.099 17.489 114.689 19.911C113.712 21.4663 113.064 22.6787 112.748 23.548C112.491 24.3603 112.361 24.8249 112.357 24.9417C112.349 25.2338 112.577 25.3852 113.043 25.3961C113.567 25.4083 114.127 25.1584 114.725 24.6463C115.322 24.1342 115.627 23.6738 115.639 23.2649L115.649 22.9144C115.659 22.564 115.885 21.8094 116.327 20.6507C116.77 19.4336 117.275 18.101 117.842 16.653C118.408 15.205 118.915 13.814 119.362 12.4801C119.81 11.0878 120.046 10.0119 120.068 9.25261C120.147 6.56573 119.329 4.67619 117.614 3.58399C115.9 2.43339 113.734 1.82748 111.116 1.76627C108.098 1.69573 105.021 2.14775 101.886 3.12233Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M77.4541 45.1555C77.6309 45.1025 78.0496 44.8233 78.7102 44.3177C79.7313 43.5311 80.6172 42.4771 81.368 41.1559C82.1187 39.8347 82.5146 38.6485 82.5558 37.5975C82.5877 36.78 82.4337 36.2491 82.0938 36.0046C81.812 35.762 81.2906 35.6873 80.5297 35.7805C80.0574 35.9412 79.3957 36.4759 78.5445 37.3848C77.7516 38.2955 77.1903 39.2426 76.8605 40.2262C76.5445 40.8594 76.2678 41.2308 76.0305 41.3403C75.8514 41.4516 75.4429 41.4681 74.8052 41.3898C74.1698 41.2531 73.7613 41.2696 73.5799 41.4393C73.3426 41.5488 73.0916 42.0087 72.8269 42.8189L72.8303 42.7313C72.6957 43.1948 72.7727 43.4603 73.0613 43.5278C73.2918 43.5934 73.5502 43.6892 73.8365 43.815C74.4674 44.0685 74.8667 44.2856 75.0344 44.4662C75.2044 44.5884 75.3418 44.7973 75.4468 45.0929C75.5449 45.5637 75.7559 46.1256 76.0799 46.7788C76.4061 47.3736 76.709 47.8215 76.9885 48.1225C77.4916 48.6644 78.0283 49.0903 78.5987 49.4004C79.2251 49.7707 79.893 49.8208 80.6026 49.5506C81.31 49.3388 82.0903 48.7492 82.9437 47.782C83.8079 46.8668 84.769 45.4817 85.827 43.6268C85.8541 43.7936 85.9499 43.8962 86.1142 43.9346C86.3447 44.0003 86.6031 44.096 86.8894 44.2219C87.5203 44.4754 87.9196 44.6924 88.0873 44.8731C88.2572 44.9953 88.3947 45.2042 88.4996 45.4998C88.5977 45.9705 88.8088 46.5325 89.1327 47.1857C89.459 47.7805 89.7619 48.2284 90.0414 48.5294C90.5445 49.0712 91.0812 49.4972 91.6516 49.8073C92.2779 50.1776 92.9459 50.2276 93.6555 49.9574C94.3629 49.7456 95.1432 49.1561 95.9966 48.1889C96.9082 47.2234 97.9276 45.7352 99.0549 43.7241C99.9939 42.058 100.587 41.0534 100.833 40.7103C101.082 40.3088 101.032 40.1026 100.682 40.0918C100.392 40.0827 100.243 40.1658 100.236 40.3409C100.231 40.4577 100.009 40.9185 99.5701 41.7233C99.1331 42.4696 98.6659 43.2443 98.1684 44.0473C96.3018 47.0876 94.6658 48.7028 93.2603 48.8928C91.857 49.0244 90.9313 48.1187 90.483 46.1754C90.3826 45.7631 90.3906 45.5587 90.507 45.5623C90.6838 45.5094 91.1025 45.2301 91.7631 44.7246C92.7842 43.9379 93.6701 42.884 94.4208 41.5628C95.1716 40.2415 95.5675 39.0554 95.6086 38.0044C95.6406 37.1869 95.4866 36.6559 95.1467 36.4115C94.8649 36.1689 94.3435 36.0942 93.5826 36.1874C93.1102 36.348 92.4485 36.8828 91.5974 37.7916C90.8045 38.7023 90.2431 39.6494 89.9134 40.633C89.5973 41.2663 89.3207 41.6376 89.0834 41.7472C88.9043 41.8585 88.4958 41.875 87.8581 41.7967C87.448 41.7084 87.1324 41.684 86.9114 41.7234C87.3365 40.9913 87.626 40.518 87.7802 40.3035C88.0289 39.902 87.9787 39.6958 87.6296 39.6849C87.3387 39.6758 87.1898 39.7589 87.1829 39.9341C87.1784 40.0508 86.9564 40.5116 86.5172 41.3164C86.0802 42.0628 85.613 42.8375 85.1155 43.6404C83.249 46.6807 81.6129 48.2959 80.2074 48.4859C78.8041 48.6176 77.8784 47.7118 77.4301 45.7686C77.3297 45.3562 77.3377 45.1518 77.4541 45.1555ZM78.7463 41.1619C78.088 41.6091 77.7669 41.6283 77.7828 41.2195C77.7897 41.0444 77.8884 40.7551 78.0789 40.3518C78.3277 39.9504 78.6066 39.5206 78.9158 39.0625C79.2273 38.5461 79.5353 38.1172 79.84 37.7759C80.1469 37.3763 80.3608 37.1199 80.4817 37.0067C80.8377 36.8424 81.0333 37.0531 81.0687 37.6388C81.104 38.2246 80.9055 38.8322 80.4731 39.4618C80.0384 40.1498 79.4628 40.7165 78.7463 41.1619ZM91.7992 41.5687C91.1409 42.0159 90.8197 42.0351 90.8357 41.6264C90.8426 41.4512 90.9413 41.162 91.1318 40.7587C91.3805 40.3572 91.6595 39.9274 91.9687 39.4694C92.2802 38.9529 92.5882 38.5241 92.8928 38.1828C93.1997 37.7831 93.4137 37.5267 93.5346 37.4136C93.8905 37.2493 94.0862 37.46 94.1215 38.0457C94.1569 38.6314 93.9583 39.2391 93.5259 39.8687C93.0912 40.5567 92.5156 41.1234 91.7992 41.5687Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M112.055 40.1902C112.685 38.5683 112.534 37.7465 111.603 37.7247C111.196 37.7152 110.692 37.9957 110.093 38.5662C109.494 39.1367 109.098 39.7412 108.904 40.3796L108.907 40.292C108.777 40.7566 108.623 41.0452 108.445 41.1579C108.269 41.2123 107.978 41.1763 107.574 41.0499C106.707 40.8543 106.148 41.0458 105.898 41.6245C105.648 42.2031 105.956 42.6195 106.822 42.8735C107.168 42.9985 107.392 43.296 107.495 43.766C107.541 44.1763 107.515 45.0524 107.418 46.3945C107.327 47.5029 107.302 48.3499 107.343 48.9353C107.384 49.5208 107.543 50.0506 107.821 50.5247C108.207 51.2351 108.808 51.5999 109.623 51.6189C110.554 51.6407 111.317 51.4247 111.913 50.971C112.567 50.5187 113.199 49.8029 113.811 48.8235C114.66 47.6743 115.04 46.6019 114.953 45.6062L114.825 44.025L117.98 43.6604C118.653 43.5919 119.226 43.5211 119.698 43.448C119.651 43.6155 119.605 43.7863 119.558 43.9603C119.226 45.3553 119.038 46.783 118.995 48.2433C118.894 49.7022 118.981 50.7271 119.255 51.318C119.47 51.9075 119.906 51.9469 120.561 51.4362C121.275 50.9268 122.358 49.7539 123.809 47.9174L127.26 43.4389L127.273 45.9818C127.235 47.2668 127.444 48.09 127.899 48.4514C128.183 48.6918 128.414 48.7557 128.592 48.6429C128.829 48.5316 129.451 48.1662 130.459 47.5468L131.083 47.123L133.132 45.7681L133.537 46.8296C133.924 47.5401 134.488 48.167 135.229 48.7104C136.03 49.1967 136.924 49.5098 137.91 49.6498C138.606 49.7245 139.424 49.656 140.362 49.4441C141.3 49.2322 142.18 48.9898 143.004 48.7167C143.829 48.3853 144.507 48.0797 145.04 47.7999C145.311 47.6281 145.506 47.4771 145.626 47.347C145.576 47.8485 145.544 48.354 145.529 48.8634C145.428 50.3223 145.514 51.3472 145.788 51.9382C146.003 52.5277 146.439 52.5671 147.095 52.0564C147.808 51.547 148.891 50.3741 150.343 48.5376L153.793 44.0591L153.806 46.602C153.768 47.887 153.977 48.7102 154.433 49.0716C154.717 49.312 154.948 49.3759 155.126 49.2631C155.362 49.1517 155.984 48.7863 156.992 48.167L157.616 47.7432L159.665 46.3882L160.071 47.4498C160.457 48.1603 161.021 48.7872 161.763 49.3306C162.564 49.8169 163.457 50.13 164.443 50.27C165.14 50.3447 165.957 50.2761 166.895 50.0643C167.833 49.8524 168.714 49.6099 169.537 49.3369C170.324 49.0205 170.979 48.7277 171.499 48.4583C171.829 48.6124 172.052 48.7504 172.167 48.8723C172.338 48.9932 172.478 49.2011 172.586 49.4959C172.688 49.9659 172.905 50.5262 173.235 51.1769C173.567 51.7691 173.874 52.2147 174.157 52.5136C174.665 53.0515 175.206 53.4733 175.779 53.7789C176.409 54.1444 177.078 54.1892 177.785 53.9135C178.49 53.6962 179.264 53.1005 180.108 52.1266C180.892 51.2813 181.754 50.0404 182.693 48.404C182.616 49.2579 182.584 50.0797 182.596 50.8696C182.558 52.1547 182.711 52.9181 183.053 53.1599C183.336 53.4587 183.656 53.4662 184.013 53.1823C184.429 52.8998 184.792 52.4407 185.102 51.805C185.352 51.2263 185.663 50.5614 186.034 49.8102C186.465 49.002 186.896 48.2229 187.326 47.4731C187.813 46.7247 188.27 46.0632 188.694 45.4886C189.12 44.8556 189.454 44.3958 189.695 44.1092L190.594 43.2534C190.714 43.1393 190.797 43.2874 190.843 43.6976C190.918 45.1022 191.21 46.0734 191.718 46.6114C192.285 47.1507 192.77 47.4835 193.174 47.6098C194.097 47.9237 195 47.8863 195.885 47.4979C196.515 47.2395 197.041 46.9787 197.463 46.7155C197.156 47.775 196.99 48.7456 196.964 49.6273C196.937 50.5619 197.058 51.383 197.328 52.0907C197.599 52.7985 198.05 53.3058 198.681 53.6128C200.001 54.2866 201.898 54.1556 204.371 53.2198C206.177 52.5119 208.027 51.3001 209.922 49.5843C210.018 49.6462 210.093 49.7047 210.145 49.76C210.316 49.8809 210.455 50.0888 210.563 50.3835C210.666 50.8535 210.882 51.4139 211.213 52.0646C211.545 52.6568 211.852 53.1024 212.134 53.4012C212.643 53.9392 213.184 54.361 213.757 54.6666C214.387 55.032 215.055 55.0769 215.762 54.8012C216.467 54.5838 217.242 53.9882 218.086 53.0143C218.988 52.0417 219.993 50.5455 221.1 48.5256C222.023 46.8521 222.606 45.8428 222.849 45.4978C223.093 45.0944 223.041 44.8886 222.692 44.8804C222.401 44.8736 222.253 44.9578 222.248 45.1331C222.244 45.2499 222.027 45.7124 221.596 46.5206C221.166 47.2704 220.706 48.0488 220.217 48.8557C218.38 51.9106 216.76 53.5386 215.357 53.7396C213.955 53.8822 213.02 52.9836 212.553 51.0438C212.449 50.6322 212.455 50.4277 212.571 50.4305C212.747 50.3761 213.163 50.0936 213.819 49.5829C214.832 48.7882 215.708 47.7274 216.445 46.4003C217.183 45.0731 217.567 43.8839 217.598 42.8325C217.622 42.0147 217.463 41.485 217.121 41.2432C216.837 41.0027 216.315 40.9321 215.555 41.0312C215.084 41.1956 214.428 41.7355 213.585 42.651C212.801 43.5679 212.249 44.5194 211.929 45.5056C211.619 46.1413 211.346 46.5149 211.11 46.6263C210.932 46.739 210.524 46.7587 209.886 46.6853C209.249 46.5535 208.841 46.5732 208.661 46.7444C208.425 46.8557 208.178 47.3176 207.921 48.1299L207.924 48.0423C207.794 48.5068 207.873 48.7717 208.163 48.8369C208.394 48.9008 208.653 48.9945 208.941 49.1181C208.942 49.1185 208.942 49.1189 208.943 49.1192C208.769 49.2609 208.591 49.4026 208.41 49.5441C206.743 50.7911 205.143 51.7181 203.611 52.3252C202.139 52.8753 200.884 52.9629 199.847 52.588C198.87 52.156 198.439 50.9477 198.556 48.9631C198.64 48.0883 198.875 47.0125 199.262 45.7356C199.649 44.4587 200.292 43.3924 201.19 42.5367C202.029 41.7379 202.472 41.5145 202.52 41.8663C202.57 42.1597 202.342 42.9727 201.837 44.3053C201.526 44.9994 201.336 45.4918 201.27 45.7825C201.261 46.0746 201.313 46.2804 201.426 46.3999L201.424 46.4875C201.537 46.6071 201.742 46.5534 202.04 46.3266C202.338 46.0997 202.638 45.7853 202.941 45.3832C203.302 44.9825 203.636 44.5227 203.943 44.0038C204.307 43.4863 204.584 42.9959 204.772 42.5327C205.208 41.5492 205.289 40.7913 205.013 40.2588C204.738 39.7263 204.338 39.4539 203.814 39.4417C203.232 39.4281 202.555 39.7045 201.781 40.2709C201.009 40.7789 200.259 41.5212 199.532 42.4979C198.765 43.5626 198.184 44.6316 197.789 45.705C197.672 45.7555 197.548 45.8098 197.418 45.8678C195.707 46.6461 194.449 46.8505 193.644 46.481C192.898 46.1129 192.666 45.0846 192.948 43.3961C193.149 42.524 193.253 41.942 193.262 41.6499C193.272 41.2995 193.163 41.0339 192.936 40.8532C192.54 40.4348 192.195 40.2806 191.901 40.3907C191.607 40.5007 191.128 40.9279 190.466 41.6723C190.045 42.13 189.533 42.7026 188.93 43.3899C188.386 44.0786 187.781 44.8535 187.115 45.7147C186.509 46.5188 185.931 47.3821 185.379 48.3044C184.828 49.2267 184.365 50.1219 183.99 50.9899C183.881 50.7535 183.865 50.3148 183.942 49.6736C184.019 49.0325 184.156 48.3343 184.352 47.579C184.551 46.7653 184.779 45.9523 185.035 45.14C185.352 44.2707 185.666 43.4889 185.978 42.7948C186.282 42.3343 186.5 41.8718 186.63 41.4072C186.76 40.9427 186.829 40.5936 186.835 40.3599C186.609 40.1209 186.293 39.9966 185.885 39.987C185.48 39.9191 185.129 39.9693 184.833 40.1378C184.473 40.4801 184.099 41.3189 183.711 42.6542C183.382 43.9324 183.109 45.2996 182.892 46.7558C182.883 46.8108 182.875 46.8658 182.867 46.9206C182.664 47.2642 182.454 47.6133 182.239 47.968C180.403 51.0229 178.782 52.6509 177.379 52.8519C175.977 52.9945 175.043 52.0959 174.575 50.1561C174.471 49.7445 174.477 49.5401 174.593 49.5428C174.77 49.4885 175.186 49.2059 175.841 48.6952C176.854 47.9006 177.73 46.8397 178.468 45.5126C179.206 44.1855 179.59 42.9962 179.621 41.9448C179.645 41.1271 179.485 40.5973 179.143 40.3555C178.859 40.1151 178.337 40.0444 177.577 40.1435C177.106 40.3079 176.45 40.8478 175.608 41.7634C174.824 42.6802 174.272 43.6318 173.952 44.6179C173.642 45.2537 173.369 45.6272 173.133 45.7386C172.955 45.8513 172.546 45.871 171.908 45.7976C171.271 45.6659 170.863 45.6855 170.683 45.8567C170.447 45.9681 170.201 46.4299 169.944 47.2422L169.946 47.1546C169.816 47.6192 169.896 47.884 170.185 47.9493C170.319 47.9863 170.463 48.0334 170.616 48.0905C170.102 48.2543 169.516 48.4307 168.859 48.6197C167.921 48.8316 166.955 49.0135 165.96 49.1657C164.966 49.3178 164.094 49.2682 163.344 49.0168C162.132 48.6378 161.425 47.9199 161.223 46.863C160.844 45.9189 160.45 45.4421 160.043 45.4326C159.693 45.4245 159.012 45.8177 157.999 46.6123C157.345 47.0646 156.78 47.4606 156.304 47.8002C155.828 48.1397 155.532 48.3082 155.416 48.3055C155.299 48.3027 155.192 48.008 155.092 47.4211C154.995 46.7759 154.958 46.0444 154.982 45.2267C154.948 44.4076 154.879 43.763 154.777 43.293C154.732 42.8244 154.624 42.5588 154.451 42.4963C154.393 42.4949 154.153 42.7231 153.732 43.1809C153.311 43.6387 152.857 44.2126 152.371 44.9026C151.159 46.5109 150.072 47.8299 149.11 48.8595C148.15 49.8307 147.613 50.2565 147.5 50.137C147.386 50.0759 147.397 49.6962 147.534 48.998C147.729 48.3011 147.927 47.5167 148.127 46.6446C148.387 45.7155 148.676 44.787 148.995 43.8593C149.313 42.9315 149.598 42.1491 149.85 41.512C150.411 40.2392 150.7 39.34 150.715 38.8143C150.791 38.2315 150.628 37.8186 150.227 37.5754C149.421 37.2643 148.71 37.6861 148.094 38.8407C147.478 39.9953 146.81 41.9086 146.091 44.5805C145.901 45.3793 145.758 46.1888 145.663 47.009C145.509 47.0166 145.19 47.1022 144.706 47.266C144.059 47.4847 143.265 47.7292 142.326 47.9995C141.388 48.2114 140.422 48.3934 139.427 48.5455C138.433 48.6976 137.561 48.648 136.811 48.3967C135.599 48.0176 134.892 47.2997 134.69 46.2429C134.31 45.2988 133.917 44.822 133.509 44.8124C133.16 44.8043 132.479 45.1975 131.466 45.9921C130.812 46.4445 130.247 46.8404 129.771 47.18C129.295 47.5196 128.999 47.688 128.883 47.6853C128.766 47.6826 128.658 47.3878 128.559 46.801C128.462 46.1557 128.425 45.4242 128.449 44.6065C128.415 43.7874 128.346 43.1428 128.243 42.6728C128.199 42.2042 128.09 41.9386 127.917 41.8761C127.859 41.8748 127.62 42.103 127.199 42.5607C126.777 43.0185 126.324 43.5924 125.838 44.2824C124.626 45.8907 123.539 47.2097 122.577 48.2393C121.617 49.2105 121.08 49.6364 120.967 49.5168C120.852 49.4557 120.864 49.076 121.001 48.3778C121.196 47.681 121.393 46.8965 121.594 46.0244C121.854 45.0953 122.143 44.1669 122.462 43.2391C122.78 42.3113 123.065 41.5289 123.317 40.8918C123.878 39.619 124.167 38.7198 124.182 38.1941C124.257 37.6114 124.095 37.1984 123.694 36.9552C122.888 36.6441 122.177 37.0659 121.561 38.2205C121.074 39.1315 120.556 40.5147 120.006 42.3701C119.768 42.3924 119.512 42.4231 119.238 42.4623C118.887 42.5126 118.478 42.5615 118.011 42.609L115.218 42.5437L114.001 42.3399L111.302 42.0138L112.055 40.1902ZM212.862 46.5537C213.171 46.2005 213.383 45.951 213.499 45.8053C213.68 45.5758 213.772 45.4026 213.776 45.2857C213.779 45.178 213.708 45.0686 213.563 44.9574C213.693 44.7532 213.83 44.5427 213.973 44.3259C214.279 43.807 214.583 43.3758 214.885 43.0321C215.188 42.63 215.399 42.3719 215.519 42.2578C215.873 42.0908 216.071 42.3 216.112 42.8854C216.153 43.4709 215.96 44.0801 215.534 44.7131C215.106 45.4045 214.536 45.9757 213.824 46.4267C213.205 46.8548 212.885 46.8972 212.862 46.5537ZM111.074 43.8497C111.548 43.5685 112.185 43.6711 112.987 44.1574C113.444 44.4603 113.752 44.8767 113.911 45.4065C114.072 45.8778 114.056 46.4035 113.864 46.9836C113.733 47.5065 113.484 48.056 113.117 48.6319C112.751 49.2079 112.272 49.6643 111.679 50.0011C111.027 50.395 110.557 50.5594 110.267 50.4942C109.98 50.3706 109.782 50.1614 109.674 49.8666C109.513 49.3952 109.442 48.8675 109.459 48.2834C109.476 47.6993 109.645 46.8849 109.967 45.8403C110.291 44.7374 110.66 44.0738 111.074 43.8497ZM175.846 45.539C175.193 45.9913 174.872 46.013 174.884 45.6042C174.889 45.4289 174.985 45.1389 175.171 44.7341C175.416 44.3307 175.691 43.8987 175.995 43.4382C176.302 42.9194 176.606 42.4881 176.907 42.1444C177.21 41.7423 177.421 41.4843 177.541 41.3702C177.895 41.2031 178.093 41.4123 178.134 41.9978C178.175 42.5832 177.983 43.1924 177.556 43.8254C177.128 44.5168 176.558 45.088 175.846 45.539Z" fill="black"/>
                </svg>
            </NavLink>
            <div className={"ContentSI"}>
                <div className={"TextSI"}>
                    SIGN IN<br></br>
                    TO YOUR<br></br>
                    ACCOUNT<br></br>
                    OR REGISTER<br></br>
                </div>
                <div className={"rightPart"}>
                    <div className={"formm w-1/2 m-3 relative"}>
                        <Loading className={`${loading ? "" : "hidden"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
                        <form>
                            <div className={"mb-1"}>
                                <label htmlFor={"username"} className={"titleForm"}>
                                    First Name
                                </label>
                                <input
                                    className={"streak1 h-14 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"}
                                    id={"username"}
                                    required={true}
                                    type={"text"}
                                    placeholder={"Enter your first name"}
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className={"mb-1"}>
                                <label className={"titleForm"} htmlFor={"email"}>
                                    Email Address
                                </label>
                                <input
                                    className={"streak1 h-14 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"}
                                    id={"email"}
                                    type={"email"}
                                    placeholder={"Enter your email address"}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={"mb-7"}>
                                <label className={"titleForm"} htmlFor={"password"}>
                                    Password
                                </label>
                                <input
                                    className={"streak1 h-14 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"}
                                    required={true}
                                    id={"password"}
                                    type={"password"}
                                    placeholder={"Enter your password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={"flex items-center justify-center"}>
                                <button
                                    className={"buttonText py-2 px-9 focus:outline-none"}
                                    type={"button"}
                                    onClick={handleRegisterSubmit}
                                >
                                    Register
                                </button>
                                <div className={"titleForm"}>OR</div>
                                <button
                                    className={"buttonText py-2 px-9 focus:outline-none"}
                                    type={"button"}
                                    onClick={handleLoginSubmit}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}