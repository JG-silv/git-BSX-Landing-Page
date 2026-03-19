import React from "react";
import Link from "next/link";
import { Button } from "../buttons/button_tabela";

const ButtonCadastro = ({
  text = "Ainda não possui uma conta?",
  buttonText = "Cadastre-se",
}) => {
  return (
    <div className="mt-16 pb-16 flex justify-center items-center gap-4">
      <p className="text-sm text-gray-600">{text}</p>
      <Button 
      onClick={() => dataLayer.push({ event: "ButtonCadastro_pages_secondary" })}
      id="ButtonCadastro_pages" asChild>
        <Link 
        onClick={() => dataLayer.push({ event: "LinkCadastro_pages_secondary" })}
        id="LinkCadastro_pages" href="/cadastro">
          {buttonText}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonCadastro;
