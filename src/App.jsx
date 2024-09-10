
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import  { ThemeProvider } from "./contexts/theme"
import { useState, useEffect } from "react"

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    console.log("i am called dark")
    setThemeMode("dark")
  }

  const lightTheme = () => {
    console.log("i am called light")
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
