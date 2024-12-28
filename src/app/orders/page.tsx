"use client";

import Link from "next/link";
import { Button } from "@/components";
import { useState } from "react";
import { ordersList } from "@/app/orders/model";

const OrdersPage = () => {
  const [searchOrderValue, setSearchOrderValue] = useState("");

  const handleInput = (value: string): void => {
    setSearchOrderValue(value);
  };

  const filteredOrders = ordersList.filter(({ name }) =>
    name.toLowerCase().includes(searchOrderValue.toLowerCase()),
  );

  return (
    <div className={"flex flex-col items-center gap-12 w-full"}>
      <Link href={"/orders/new"}>
        <Button
          isActive={true}
          type={"button"}
          paddings={"px-10 py-4"}
          borderRadius={"rounded-20"}
          textStyle={"text-base"}
        >
          Сформировать новый приказ
        </Button>
      </Link>

      <input
        type={"text"}
        onChange={(event) => handleInput(event.target.value)}
        value={searchOrderValue}
        placeholder={"Поиск..."}
        className={
          "bg-extra_light_gray max-w-[910px] w-full h-[59px] py-4 px-16 rounded-full text-xl text-[#272727] placeholder:text-[#6B6B6B]"
        }
      />

      <div className={"flex flex-col gap-7 w-full"}>
        {filteredOrders.length ? (
          filteredOrders.map(({ id, name }) => (
            <Link
              key={id}
              href={`?order=${id}`}
              className={
                "text-xl text-black whitespace-nowrap overflow-hidden text-ellipsis"
              }
            >
              {name}
            </Link>
          ))
        ) : (
          <p className={"text-xl text-black"}>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
