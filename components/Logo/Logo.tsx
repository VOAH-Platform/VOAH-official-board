import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Logo.module.css";
import { useRouter } from "next/router";

export function Logo({ className, ...props }: ComponentProps<"div">) {
  const router = useRouter();

  return (
    <div
      className={clsx(className, styles.logo)}
      {...props}
      onClick={() => {
        router.push("/dashboard");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#52525B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-home"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </div>
  );
}
