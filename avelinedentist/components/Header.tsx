export default function Header() {
    return (
      <header>
        <div className="bg-gray-100 flex items-center justify-between py-7 px-20">
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