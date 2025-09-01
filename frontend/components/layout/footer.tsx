import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">BlogDNF</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A modern content management system for bloggers and content creators.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/authors" className="block text-muted-foreground hover:text-primary transition-colors">
                Authors
              </Link>
              <Link href="/categories" className="block text-muted-foreground hover:text-primary transition-colors">
                Categories
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2 text-sm">
              <Link href="/docs" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link href="/api" className="block text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </Link>
              <Link href="/support" className="block text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BlogDNF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}