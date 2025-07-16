import { BookOpen, Github, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gradient-card border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ByteBooks
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A minimal and modern library management system built with React and TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-muted-foreground hover:text-primary transition-colors">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/create-book" className="text-muted-foreground hover:text-primary transition-colors">
                  Add Book
                </Link>
              </li>
              <li>
                <Link to="/borrow-summary" className="text-muted-foreground hover:text-primary transition-colors">
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Book Management</li>
              <li>• Borrowing System</li>
              <li>• Search & Filter</li>
              <li>• Modern UI/UX</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Project</h3>
            <p className="text-sm text-muted-foreground">
              Built with modern web technologies for efficient library management.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 ByteBooks. Built with React & TypeScript.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for modern libraries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}