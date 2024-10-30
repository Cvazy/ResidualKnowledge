import { MenuItem } from "@/components/Sidebar/ui/MenuItem";
import { MENU } from "@/constants";

export const Sidebar = () => {
  return (
    <div className={"bg-main_gray w-full h-full"}>
      <div
        className={
          "py-12 px-5 sm:px-8 sm:py-14 md:py-24 md:px-10 lg:py-32 xl:py-[150px] w-full h-full"
        }
      >
        <div className={"flex flex-col items-center gap-10 w-full h-full"}>
          <div
            className={
              "flex items-center justify-center rounded-full bg-medium_gray min-w-24 max-w-24 min-h-24 max-h-24"
            }
          ></div>

          <div className={"flex flex-col gap-6 w-full"}>
            {MENU.map(({ link, name }) => (
              <MenuItem key={link} link={link} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
