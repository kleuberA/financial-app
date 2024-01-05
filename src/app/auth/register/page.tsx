import RegisterForm from "@/components/Login/register-form";
import TitlePageAuth from "@/components/Login/title-page";

interface RegisterProps {

}
export default function Register(props: RegisterProps) {
    return (
        <div className="w-full h-screen flex flex-col items-center gap-5 justify-center">
            <TitlePageAuth title="Financial.Io" />
            <RegisterForm />
        </div>
    )
}