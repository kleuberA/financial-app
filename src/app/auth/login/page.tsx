import LoginForm from "@/components/Login/login-form";
import TitlePageAuth from "@/components/Login/title-page";

interface LoginProps {

}
export default function Login(props: LoginProps) {
    return (
        <div className="w-full h-screen flex flex-col items-center gap-5 justify-center">
            <TitlePageAuth title="Financial.Io" />
            <LoginForm />
        </div>
    )
}