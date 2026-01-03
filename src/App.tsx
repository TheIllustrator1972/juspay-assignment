import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme || 'light'
    setTheme(initialTheme)
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Hello World</h1>
      
      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Toggle Theme: {theme}
      </button>
    </div>
  )
}

export default App