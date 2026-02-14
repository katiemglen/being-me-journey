import './globals.css'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(145deg, #f5f0eb 0%, #e8dfd5 50%, #ddd3c6 100%)',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: '#3d3329',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <p style={{
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        fontWeight: 300,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        opacity: 0.5,
        marginBottom: '1rem',
      }}>
        Welcome to
      </p>
      <h1 style={{
        fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
        fontWeight: 300,
        letterSpacing: '0.06em',
        marginBottom: '0.5rem',
        color: '#2c241d',
      }}>
        Being Me Journey
      </h1>
      <div style={{
        width: '60px',
        height: '1px',
        background: '#8b7d6b',
        margin: '1.5rem 0',
      }} />
      <p style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        fontWeight: 300,
        fontStyle: 'italic',
        opacity: 0.6,
        maxWidth: '400px',
        lineHeight: 1.6,
      }}>
        A journey of growth, truth, and becoming.
      </p>
      <p style={{
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        fontWeight: 300,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.5,
        marginTop: '2rem',
      }}>
        Coming Soon
      </p>
    </main>
  )
}
