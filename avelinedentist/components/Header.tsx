export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between py-7 px-20">
          <a href="">Logo</a>
  
          <nav>
            <ul className="flex gap-6">
              <li><a href="">nav 1</a></li>
              <li><a href="">nav 2</a></li>
              <li><a href="">nav 3</a></li>
              <li><a href="">nav 4</a></li>
            </ul>
          </nav>
  
          <button>Me contacter</button>
        </div>
      </header>
    );
  }