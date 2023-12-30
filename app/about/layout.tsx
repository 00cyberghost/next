import Link from "next/link"
import  styles  from "./style.module.css"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          
          {/* <main className={styles.main}>{children}</main> */}
          {children}
        </>
       
    )
  }