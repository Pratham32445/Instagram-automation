import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex relative w-full max-w-sm flex-col gap-6">
          <div className="flex-1 justify-center flex items-center gap-3">
            <Image src="/instagram.svg" width={50} height={50} alt="Image" />
            <p className="text-white text-2xl">Automator</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
