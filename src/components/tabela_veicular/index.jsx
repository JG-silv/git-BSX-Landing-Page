"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";

function slugify(str = "") {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const TabelaVeicular = ({ menuItems }) => {
  const safeMenu = Array.isArray(menuItems) ? menuItems : [];
  const [selectedItem, setSelectedItem] = useState(safeMenu[0] || null);

  const indexable = useMemo(
    () =>
      safeMenu.map((it) => ({
        raw: it,
        idSlug: slugify(it.id || ""),
        titleSlug: slugify(it.title || ""),
      })),
    [safeMenu]
  );

  useEffect(() => {
    if (!safeMenu.length) return;

    const pickFromHash = () => {
      const rawHash = typeof window !== "undefined" ? window.location.hash : "";
      if (!rawHash || rawHash === "#") return null;

      const decoded = decodeURIComponent(rawHash.replace("#", ""));
      const hash = slugify(decoded);

      // aceita prefixo opcional: veicular-<slug>
      const pref = /^(veicular)-(.+)$/.exec(hash);
      const base = pref?.[2] || hash;

      // 1) tenta por id exato (com ou sem prefixo)
      let found =
        indexable.find((n) => n.idSlug === hash || n.idSlug === base)?.raw ||
        null;
      if (found) return found;

      // 2) título exato
      found = indexable.find((n) => n.titleSlug === base)?.raw || null;
      if (found) return found;

      // 3) título contendo
      found = indexable.find((n) => n.titleSlug.includes(base))?.raw || null;
      return found;
    };

    const applyFromHash = () => {
      const item = pickFromHash();
      if (item) setSelectedItem(item);
      // se não achar, mantém a primeira (comportamento desejado)
    };

    applyFromHash();

    const onHashChange = () => applyFromHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [safeMenu, indexable]);

  if (!safeMenu || safeMenu.length === 0) {
    return (
      <div className="py-12 px-6 text-center text-white">
        Nenhuma consulta veicular disponível.
      </div>
    );
  }

  const handlePick = (item) => {
    setSelectedItem(item);
    const base = slugify(item.id || item.title);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#veicular-${base}`);
    }
  };

  return (
    <div className="py-12 px-6">
      {/* TÍTULO */}
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        CONSULTAS VEICULARES
      </h2>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* DETALHES (ESQUERDA) */}
        <div className="lg:col-span-2 p-6 rounded-2xl shadow-lg bg-white min-h-[600px]">
          <Transition
            as="div"
            key={selectedItem?.id || selectedItem?.title}
            show={!!selectedItem}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            {selectedItem && (
              <div>
                {/* Título e descrição */}
                <h3 className="text-2xl font-bold text-[#26478d] mb-2 underline underline-offset-4 decoration-[#3b67ac] text-center">
                  {selectedItem.title}
                </h3>
                <p className={`${poppins.className} text-black mb-4 mt-2 `}>
                  {selectedItem.description}
                </p>

                {/* Lista de features e preço */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-6 items-center bg-[#f5f5f5] border border-gray-100 p-4 rounded-lg">
                  {selectedItem.details.map((d) => (
                    <React.Fragment
                      key={`${slugify(
                        selectedItem.id || selectedItem.title
                      )}-${slugify(d.label)}`}
                    >
                      <div
                        className={`${inter.className} text-sm text-gray-800 text-right mr-8`}
                      >
                        {d.label}
                      </div>
                      <div className="font-semibold text-[#050A30] text-left">
                        {d.value}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="bg-[#83227d] text-white px-6 py-2 rounded-full shadow hover:shadow-xl transform hover:scale-105 transition duration-300 block mx-auto font-bold"
                    onClick={() => dataLayer.push({ event: "Button_veicular" })}
                  >
                    Ver Consulta Veicular
                  </button>
                </a>
              </div>
            )}
          </Transition>
        </div>

        {/* CARDÁPIO (DIREITA) */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-4 content-start">
          {safeMenu.map((item) => {
            const price = item.details.find((d) => d.label === "Preço")?.value;
            const isActive = selectedItem?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handlePick(item)}
                className={`
                  flex flex-col justify-between
                  bg-white p-5 rounded-2xl shadow-lg cursor-pointer
                  transform transition
                  ${
                    isActive
                      ? "ring-4 ring-[#83227d] hover:shadow-2xl hover:-translate-y-2"
                      : "hover:shadow-2xl hover:-translate-y-2"
                  }
                `}
              >
                <span
                  className={`${inter.className} text-[#050A30] font-medium mb-2`}
                >
                  {item.title}
                </span>
                <div className="flex items-center justify-between">
                  {price && (
                    <span className="text-[#83227d] font-semibold text-2sm">
                      {price}
                    </span>
                  )}
                  <svg
                    className="w-5 h-5 text-[#3b67ac] transition-transform hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 4l6 6-6 6-1.4-1.4L13.2 11H4v-2h9.2L8.6 5.4z" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* LEGENDA ABAIXO */}
      <div className="mt-12 text-center text-gray-500">
        <p
          className={`${inter.className} text-[#050A30] text-center italic font-bold text-sm`}
        >
          Clique em uma consulta para ver mais detalhes e realizar a compra.
        </p>
      </div>
    </div>
  );
};

// Validação de props para segurança e documentação.
TabelaVeicular.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default TabelaVeicular;
