export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-black">
        <div className="flex items-center justify-between py-7 px-20">
          <a className="text-white" href="">Logo</a>
  
          <nav>
            <ul className="flex gap-6 text-[14px] text-white">
              <li><a className="hover:underline" href="">About Us</a></li>
              <li><a className="hover:underline" href="">Our Services</a></li>
              <li><a className="hover:underline" href="">Our Process</a></li>
              <li><a className="hover:underline" href="">Testimonials</a></li>
              <li><a className="hover:underline" href="">FAQ</a></li>
              <li><a className="hover:underline" href="">Contact</a></li>
            </ul>
          </nav>
  
          <button className="text-[14px] text-white">Book Free Consultation</button>
        </div>
      </header>
    );
  }