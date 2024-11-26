// React
import { Link } from "react-router-dom";

// Flowbite
import { Footer } from "flowbite-react";

export const AppFooter = () => {
  return (
    <Footer
      container
      className="fixed right-0 bottom-0 left-0 border-t flex justify-between items-center p-3 sm:p-6 z-10"
    >
      <Footer.Brand src="/favicon.png" alt="Ta3mia" />
      <Footer.Copyright by="Shamandy™" year={2024} />
      <Footer.LinkGroup className="hidden sm:flex">
        <Footer.Link as={Link} href="/">
          About
        </Footer.Link>
        <Footer.Link as={Link} href="/">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
