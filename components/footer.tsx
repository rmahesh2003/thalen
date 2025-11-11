"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <div className="text-sm font-bold text-white mb-2">AEROMED</div>
            <p className="text-xs text-gray-500">Autonomous medical evacuation for critical seconds.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Thalen Industries – AeroMed Division.</p>
          <div className="flex gap-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
