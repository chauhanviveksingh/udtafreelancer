import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              {/* Company Logo */}
              <img src="https://via.placeholder.com/50" alt="Company Logo" className="w-12 h-12 mr-3" />
              <span className="text-xl font-bold">BLINDER</span>
            </div>
            <p className="text-gray-400">
              We are a company dedicated to providing exceptional digital solutions tailored to your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#support" className="hover:text-white">Support</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#cookie" className="hover:text-white">Cookie Policy</a>
              </li>
              <li>
                <a href="#refund" className="hover:text-white">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Blinder. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#facebook" aria-label="Facebook" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.734 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.482v-9.3h-3.119v-3.622h3.119v-2.671c0-3.1 1.893-4.787 4.657-4.787 1.324 0 2.463.099 2.793.143v3.24h-1.915c-1.504 0-1.794.716-1.794 1.763v2.312h3.588l-.467 3.622h-3.121v9.3h6.117c.734 0 1.325-.592 1.325-1.325v-21.35c0-.733-.591-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.566-2.005.974-3.127 1.194-.897-.956-2.178-1.554-3.594-1.554-2.717 0-4.916 2.2-4.916 4.917 0 .39.044.765.128 1.124-4.083-.205-7.704-2.159-10.125-5.134-.423.725-.664 1.562-.664 2.457 0 1.694.864 3.191 2.179 4.068-.801-.025-1.555-.246-2.21-.614v.062c0 2.366 1.683 4.342 3.918 4.791-.41.112-.843.171-1.287.171-.315 0-.621-.03-.92-.086.622 1.944 2.43 3.362 4.57 3.402-1.675 1.312-3.786 2.093-6.08 2.093-.394 0-.785-.023-1.17-.068 2.167 1.391 4.742 2.203 7.514 2.203 9.013 0 13.945-7.472 13.945-13.945 0-.213-.005-.425-.014-.636.959-.693 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.769 3h-15.538c-1.33 0-2.231.902-2.231 2.106v13.788c0 1.204.902 2.106 2.231 2.106h15.538c1.331 0 2.231-.902 2.231-2.106v-13.788c0-1.204-.9-2.106-2.231-2.106zm-10.285 16.181h-3.227v-8.578h3.227v8.578zm-1.614-9.783c-1.029 0-1.719-.783-1.719-1.758 0-.986.702-1.758 1.731-1.758 1.03 0 1.719.772 1.719 1.758-.013.975-.702 1.758-1.731 1.758zm12.506 9.783h-3.227v-4.455c0-1.066-.38-1.792-1.33-1.792-.728 0-1.162.497-1.353.974-.07.168-.088.396-.088.624v4.65h-3.227s.042-7.522 0-8.578h3.227v1.214c.429-.661 1.199-1.605 2.922-1.605 2.13 0 3.731 1.394 3.731 4.388v4.581h-.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
