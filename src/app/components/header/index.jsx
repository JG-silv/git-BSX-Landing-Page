"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import menuData from "./props.jsx";
import { sourceSans3 } from "../fonts/fonts.jsx";

// Hook para esconder o header ao rolar a página
const useAutoHidingHeader = (isMenuOpen) => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (isMenuOpen) {
      setShowHeader(true);
      return;
    }
    const currentY = window.scrollY;
    setShowHeader(currentY < lastScrollY.current || currentY < 100);
    lastScrollY.current = currentY;
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return showHeader;
};

// Accordion mobile
const MobileAccordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-4 text-lg font-semibold"
    >
      {title}
      <ChevronDown
        size={20}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && <div className="pl-4 pb-4 space-y-3">{children}</div>}
  </div>
);

const Header = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  const dropdownContentRef = useRef(null);
  const headerHeight = 92;
  const showHeader = useAutoHidingHeader(!!activeMegaMenu || isMobileMenuOpen);

  useEffect(() => {
    if (activeMegaMenu && dropdownContentRef.current) {
      setPlaceholderHeight(dropdownContentRef.current.offsetHeight);
    } else {
      setPlaceholderHeight(0);
    }
  }, [activeMegaMenu]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    if (!isMobileMenuOpen) setOpenAccordion(null);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleMegaMenuEnter = (key) => setActiveMegaMenu(key);
  const handleMegaMenuLeave = () => setActiveMegaMenu(null);
  const handleAccordionToggle = (key) =>
    setOpenAccordion(openAccordion === key ? null : key);

  return (
    <div onMouseLeave={handleMegaMenuLeave} className="bg-white">
      <header
        className={`fixed top-0 w-full bg-white z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${!activeMegaMenu ? "shadow-lg shadow-blue-700/20" : ""}`}
      >
        <div
          className={`${sourceSans3.className} container flex items-center justify-between md:justify-center px-4 py-7 max-w-7xl mx-auto`}
        >
          <a href="/" className="flex-shrink-0 md:px-6">
            <img
              src="/images/logo.png"
              alt="Grupo BSX"
              width="90"
              height="40"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {Object.entries(menuData).map(([key, { mainLabel }]) => (
              <div
                key={key}
                onMouseEnter={() => handleMegaMenuEnter(key)}
                onFocus={() => handleMegaMenuEnter(key)}
                className="relative"
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  {mainLabel} <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            ))}

            <a
              href="/sobre_nos"
              className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
            >
              Sobre o Grupo BSX
            </a>
            <a
              href="https://api.whatsapp.com/send?l=pt_BR&phone=5521994590797"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
            >
              Fale conosco
            </a>

            <div className="flex items-center space-x-4">
              <a
                onClick={() => dataLayer.push({ event: "Foi_para_login" })}
                href="https://app.grupobsx.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 border-solid border-2 
                bg-gradient-to-b 
                hover:from-blue-100 hover:to-purple-400
                text-blue-800  px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Login
              </a>
              <a
                href="/cadastro"
                className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Cadastre-se <ArrowRight size={16} />
              </a>
            </div>
          </nav>

          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-blue-800" />
              ) : (
                <Menu size={28} className="text-blue-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        style={{ height: `calc(${headerHeight}px + ${placeholderHeight}px)` }}
        className="transition-all duration-300"
      />

      {/* Mega Menu Desktop */}
      {activeMegaMenu && (
        <div
          ref={dropdownContentRef}
          className="fixed left-0 w-full bg-white z-40 shadow-lg shadow-blue-700/20 transition-opacity duration-300"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="container mx-auto">
            <div
              className={`${sourceSans3.className} py-8 flex justify-center gap-12`}
            >
              {menuData[activeMegaMenu].items.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold mb-4 text-blue-700">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="text-gray-700 hover:text-blue-600 whitespace-nowrap"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <div className="p-6 space-y-4 pb-24 text-gray-800">
          {Object.entries(menuData).map(([key, { mainLabel, items }]) => (
            <MobileAccordion
              key={key}
              title={mainLabel}
              isOpen={openAccordion === key}
              onToggle={() => handleAccordionToggle(key)}
            >
              {items.flatMap((section) =>
                section.items.map((item) => (
                  <a key={item.label} href={item.href} className="block py-3">
                    <span className="font-medium">{item.label}</span>
                    {item.subtitle && (
                      <span className="block text-sm text-gray-500">
                        {item.subtitle}
                      </span>
                    )}
                  </a>
                )),
              )}
            </MobileAccordion>
          ))}

          <a
            href="/sobre_nos"
            className="block py-4 text-lg font-semibold border-b border-gray-200"
          >
            Sobre o Grupo BSX
          </a>
          <a
            href="https://api.whatsapp.com/send?l=pt_BR&phone=5521994590797"
            className="block py-4 text-lg font-semibold border-b border-gray-200"
          >
            Fale conosco
          </a>

          <div className="pt-6 flex space-x-4">
            <a
              alt="LinkCadastre-se_Homepage"
              href="/cadastro"
              className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg transition-colors"
            >
              Cadastre-se
            </a>
            <a
              alt="LinkLogin_Homepage"
              onClick={() => dataLayer.push({ event: "Foi_para_login_mobile" })}
              href="https://app.grupobsx.com.br/"
              className="flex text-center border-solid border-1 
                bg-gradient-to-b 
                hover:from-purple-0 hover:to-purple-200
                text-[#83227D] px-4 py-3 rounded-lg transition-colors "
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
