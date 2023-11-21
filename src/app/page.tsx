'use client'
import { Rodape } from "@/components/footer";
import { Cabeçalho } from "@/components/header";
import { Menu } from "@/components/main";


export default function Home() {
  return (
    <>
      <Cabeçalho></Cabeçalho>
      <Menu></Menu>
      <Rodape></Rodape>
    </>
  )
}