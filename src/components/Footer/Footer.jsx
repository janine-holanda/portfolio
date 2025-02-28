import janineOliveiraLogo from "../../assets/logo/janine-oliveira-logo.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-2 pt-8">
      <hr className=" w-full border-m-blue border-dashed" />
      <img src={janineOliveiraLogo} alt="Janine Oliveira" className="w-40" />
      <p className="text-white text-[0.625rem]">
        © All CopyRights Reserved 2025
      </p>
    </div>
  );
}
