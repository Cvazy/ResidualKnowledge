import Image from "next/image";

const SuccessOrderPage = () => {
  return (
    <div className={"flex justify-center gap-3 w-full"}>
      <Image
        src={"/success.svg"}
        alt={"Успешно сформированный отчёт"}
        width={30}
        height={30}
      />

      <p className={"text-xl text-left font-bold text-main_gray"}>
        Приказ №000-0000 сформирован
      </p>
    </div>
  );
};

export default SuccessOrderPage;
