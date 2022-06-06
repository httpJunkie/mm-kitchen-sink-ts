import type { NextPage } from 'next'

const Frame: NextPage = () => {
  return (
    <div className={`app-container`}>
      <main>
        <header>
  
          <span>Logo</span>
  
          <span>Topnav</span>
        </header>
        <section>

          <span>ROUTER AREA</span>

        </section>
        <footer>
  
          <span>Foot</span>
        </footer>
      </main>
      <span>Sidenav</span>
    </div>
  )
}

export default Frame
