import LoginForm from "@/components/Login/login-form";
import TitlePageLogin from "@/components/Login/title-page";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-5 justify-center">
      <TitlePageLogin title="Financial.Io" />
      <LoginForm />
    </div>
  )
}
