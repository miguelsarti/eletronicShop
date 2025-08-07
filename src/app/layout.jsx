import Header from "../components/Header/Header";
import localFont from "next/font/local";
import { Inter } from "next/font/google";


const roboto = localFont({
    src: [
        {
            path: "../../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
});


export default function ({ children }) {

  
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body className={roboto.variable}>
        <Header 
        title="Loja de Eletrônicos"
        subtitle="Encontre os melhores produtos"
        total={0}
        /> 
        {children}
      </body>
    </html>
  );
}