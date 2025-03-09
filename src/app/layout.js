import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'employees',
  description: 'demo'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
