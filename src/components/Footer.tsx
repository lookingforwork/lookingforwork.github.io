import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <footer>
      <Container>
        <div className="text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by OPT.
        </div>
      </Container>     
    </footer>
  );
}

