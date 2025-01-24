"use client";
import React from "react";
// --
type WithSystemProps = {
  theme: string;
  funSystem: () => void;
  funLight: () => void;
  funDark: () => void;
};
type Props = {
  theme: string;
  func: () => void;
};
type ThemeSwitchProps = {
  attribute?: "class" | "data-theme";
  btnType?: "light-icon" | "with-system";
};
// --
const ThemeContext = React.createContext<"light" | "dark">("light");
const storageKey = "theme-preference";
// --
/**
 * Custom hook to manage and toggle between light and dark themes.
 *
 * @returns {{theme:"light" | "dark"; setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>}} An object containing the current theme and a function to update it.
 */
function useTheme(): {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return { theme, setTheme };
}
/**
 * ThemeProvider component that supplies the current theme to its children
 * using the ThemeContext.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will
 * receive the theme context.
 * @returns {JSX.Element} A ThemeContext.Provider wrapping the children with
 * the current theme value.
 */
function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
// --- WITH SYSTEM --- //
const Dark = React.memo(function Dark({ theme, func }: Props) {
  return (
    <button
      id="theme-dark"
      aria-label={`${theme} mode`}
      onClick={func}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer  hover:text-amber-500"
      type="button"
    >
      <span className="group relative">
        <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
            Dark
            <svg
              className="absolute left-0 top-full h-2 w-full text-black"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <title>Toolip</title>
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <span>
          <svg
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <title>Dark Icon</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </button>
  );
});
// --
const Light = React.memo(function Light({ theme, func }: Props) {
  return (
    <button
      id="theme-light"
      aria-label={`${theme} mode`}
      onClick={func}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer hover:text-amber-500"
      type="button"
    >
      <span className="group relative">
        <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
            Light
            <svg
              className="absolute left-0 top-full h-2 w-full text-black"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <title>Toolip</title>
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <span>
          <svg
            height="16"
            width="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
          >
            <title>Light Icon</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </button>
  );
});
// --

const SysTheme = React.memo(function SysTheme({ theme, func }: Props) {
  return (
    <button
      id="theme-system"
      aria-label={`${theme} mode`}
      onClick={func}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer  hover:text-amber-500"
      type="button"
    >
      <span className="group relative">
        <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
            System
            <svg
              className="absolute left-0 top-full h-2 w-full text-black"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <title>Toolip</title>
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <span>
          <svg
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <title>System Icon</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3.25C1 1.45507 2.45507 0 4.25 0H11.75C13.5449 0 15 1.45507 15 3.25V15.25V16H14.25H1.75H1V15.25V3.25ZM4.25 1.5C3.2835 1.5 2.5 2.2835 2.5 3.25V14.5H13.5V3.25C13.5 2.2835 12.7165 1.5 11.75 1.5H4.25ZM4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V10H4V4ZM9 13H12V11.5H9V13Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </button>
  );
});
// --
const WithSystem: React.FC<WithSystemProps> = ({
  theme,
  funSystem,
  funLight,
  funDark,
}) => {
  return (
    <div className="flex flex-row gap-3 shadow-sm p-2 max-w-max rounded-md">
      <SysTheme theme={theme} func={funSystem} />
      <Light theme={theme} func={funLight} />
      <Dark theme={theme} func={funDark} />
    </div>
  );
};
// --- LIGHT ICON --- //
const DarkLight = React.memo(({ theme, func }: Props) => {
  const _theme = theme === "dark" ? "To Light" : "To Dark";
  return (
    <button
      id="dark-light"
      aria-label={`${theme} mode`}
      onClick={func}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer hover:text-amber-500"
      type="button"
    >
      <span className="group relative">
        <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
            {_theme}
            <svg
              className="absolute left-0 top-full h-2 w-full text-black"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <title>Toolip</title>
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <span>
          <svg
            fill={theme}
            height="24"
            width="24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <title>Dark Light Icon </title>
            <g>
              <g>
                <g>
                  <path
                    d="M256,108.936c-81.091,0-147.064,65.973-147.064,147.064S174.909,403.064,256,403.064S403.064,337.091,403.064,256
                           S337.091,108.936,256,108.936z M256,370.383c-63.071,0-114.383-51.312-114.383-114.383c0-63.071,51.312-114.383,114.383-114.383
                           c63.071,0,114.383,51.312,114.383,114.383C370.383,319.071,319.071,370.383,256,370.383z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M256,83.708c9.024,0,16.34-7.316,16.34-16.34V16.34C272.34,7.316,265.024,0,256,0c-9.024,0-16.34,7.316-16.34,16.34
                           v51.027C239.66,76.391,246.976,83.708,256,83.708z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M256,428.292c-9.024,0-16.34,7.316-16.34,16.34v51.027c0,9.024,7.316,16.34,16.34,16.34c9.024,0,16.34-7.316,16.34-16.34
                           v-51.027C272.34,435.609,265.024,428.292,256,428.292z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M111.062,134.171c6.38,6.381,16.727,6.381,23.109,0c6.381-6.38,6.381-16.727,0-23.109L98.089,74.981
                           c-6.38-6.381-16.727-6.381-23.109,0c-6.381,6.38-6.381,16.727,0,23.109L111.062,134.171z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M400.938,377.829c-6.38-6.381-16.727-6.38-23.109,0c-6.381,6.38-6.381,16.727,0,23.109l36.081,36.082
                           c6.38,6.382,16.727,6.382,23.109,0c6.382-6.38,6.382-16.727,0-23.109L400.938,377.829z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M83.708,256c0-9.024-7.316-16.34-16.34-16.34H16.34C7.316,239.66,0,246.976,0,256c0,9.024,7.316,16.34,16.34,16.34
                           h51.027C76.391,272.34,83.708,265.024,83.708,256z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M495.66,239.66h-51.027c-9.024,0-16.34,7.316-16.34,16.34c0,9.024,7.316,16.34,16.34,16.34h51.027
                           c9.024,0,16.34-7.316,16.34-16.34C512,246.976,504.684,239.66,495.66,239.66z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M111.062,377.829l-36.081,36.082c-6.381,6.382-6.381,16.727,0,23.109c6.38,6.382,16.727,6.383,23.109,0l36.081-36.082
                           c6.381-6.381,6.381-16.727,0-23.109C127.79,371.447,117.443,371.447,111.062,377.829z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M400.938,134.171l36.081-36.082c6.382-6.381,6.382-16.727,0-23.109c-6.38-6.381-16.727-6.381-23.109,0l-36.081,36.082
                           c-6.381,6.381-6.381,16.727,0,23.109C384.21,140.552,394.557,140.553,400.938,134.171z"
                    fill="currentColor"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </g>
          </svg>
        </span>
      </span>
    </button>
  );
});
// --- THEME SWITCH --- //
const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ attribute, btnType }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "light"
  );
  const getColorPreference = React.useCallback((): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as "light" | "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }, []);
  const set_themes = React.useCallback(
    (theme: "light" | "dark") => {
      if (attribute === "class") {
        document.documentElement.classList.add(theme);
      }
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(storageKey, theme);
      setCurrentTheme(theme);
      setTheme(theme);
    },
    [attribute, setTheme]
  );
  React.useEffect(() => {
    const initTheme = getColorPreference();
    set_themes(initTheme);
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      set_themes(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [getColorPreference, set_themes]);
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    set_themes(newTheme);
  };
  const toggleLight = () => {
    const newTheme = "light";
    localStorage.setItem(storageKey, newTheme);
    set_themes(newTheme);
  };
  const toggleDark = () => {
    const newTheme = "dark";
    localStorage.setItem(storageKey, newTheme);
    set_themes(newTheme);
  };
  const toggleSystem = () => {
    const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    localStorage.setItem(storageKey, newTheme);
    set_themes(newTheme);
  };
  if (!mounted) {
    return null;
  }
  if (btnType === "light-icon") {
    return <DarkLight theme={currentTheme} func={toggleTheme} />;
  }
  return (
    <WithSystem
      theme={currentTheme}
      funSystem={toggleSystem}
      funLight={toggleLight}
      funDark={toggleDark}
    />
  );
};

export { useTheme, ThemeProvider, ThemeSwitch };
