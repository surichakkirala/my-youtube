import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { darkMode, setDarkMode } = useTheme();
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={() => handleThemeChange()}>
        {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default ThemeToggler;
